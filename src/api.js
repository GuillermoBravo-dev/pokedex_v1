// Este se usa para buscar un pokemon en específico
export const searchPokemon = async (pokemon) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch(err) {
        
    }
}

// limit = Cantidad de pokemones que queremos obtener de la API
// offset = Cantidad de pokemones a partir del cual queremos empezar a buscar 
// (si fuera offset=200 empezaría a buscar desde el pokemon número 200.)
export const getPokemons = async (limit=25, offset=0) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch(err) {
        
    }
}

// Ya que cada array del pokemon tiene [nombre, url]
// Crearemos una función
export const getPokemonData = async (url) => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch(err) {

    }
}