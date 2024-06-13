
var cnt =[];
var popl =[];
fetch('data.json')
    .then(response => response.json()) // Parse the JSON data
    .then(data => {
        // Process the data
        console.log(data);
    let i =0 ;
        // Example: Log population of each country
        data.countries.forEach(country => {
            console.log(`Country: ${country.country}`);
            cnt[i]= country.country;
            console.log(`Total Population: ${country.population.total}`);
            popl[i++]= country.population.total;
            console.log(`Women: ${country.population.women}`);
            console.log(`Men: ${country.population.men}`);
            console.log(`Children: ${country.population.children}`);
            console.log(`Older Persons: ${country.population.older_persons}`);
            console.log(`Age Ranges: ${JSON.stringify(country.population.age_ranges)}`);
        });
        // console.log(cnt);
        const ctx = document.getElementById('lineChart').getContext('2d');

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: cnt,
                datasets: [{
                    label: '# of Votes',
                    data: popl,
                    backgroundColor: [
                        'rgba(85,85,85,1)'
                    ],
                    borderColor: [
                        'rgba(41, 155, 99, 1)',

                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        responsive: true,
                        beginAtZero: true,
                    }
                }
            }
        });




        const cgx = document.getElementById('doughnutChart').getContext('2d');

        new Chart(cgx, {
            type: 'doughnut',
            data: {
                labels: cnt,
                datasets: [{
                    label: '# of Votes',
                    data: popl,
                    backgroundColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgb(8,138,51)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        responsive: true,
                        maintainAspectRatio:true
                    }
                }
            }
        });
    })
    .catch(error => {
        console.error('Error fetching the JSON data:', error);
    });




