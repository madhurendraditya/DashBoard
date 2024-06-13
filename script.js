 fetch('data.json')
    .then(response => response.json()) // Parse the JSON data
    .then(data => {
        // Process the data
        console.log(data);

        // Example: Log population of each country
        data.countries.forEach(country => {
            console.log(`Country: ${country.country}`);
            console.log(`Total Population: ${country.population.total}`);
            console.log(`Women: ${country.population.women}`);
            console.log(`Men: ${country.population.men}`);
            console.log(`Children: ${country.population.children}`);
            console.log(`Older Persons: ${country.population.older_persons}`);
            console.log(`Age Ranges: ${JSON.stringify(country.population.age_ranges)}`);
        });
    })
    .catch(error => {
        console.error('Error fetching the JSON data:', error);
    });
