"use stritc";

const heroInfo = async() => {
    const url = 'https://www.superheroapi.com/api.php/2702658359969943/search/batman';
    const getApi = await fetch( url );
    const json = await getApi.json();
//     const array = json.results;
//     const api = array[0];

//     console.log(api)
}