const loadapi = async() => {

    const url = 'https://covid-19-ce.p.rapidapi.com/';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'a9ac73fa61msh5a89735d3747a4ep1d265cjsn1d615539817c',
            'x-rapidapi-host': 'covid-19-ce.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
};


loadapi();