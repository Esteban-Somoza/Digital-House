const fetch = require('node-fetch');
const fs = require('fs')

// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//     .then((result) => result.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));


const fetchPokemon = async () =>{
    try {
        const res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=0x64ff637fb478863b7468bc97d30a5bf3a428a1fd&vs_currencies=vs_usd");
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}   
fetchPokemon(3)