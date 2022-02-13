// uris 
const uriCountriesALl = () => `https://restcountries.com/v2/all/`
const uriCountrieName = name => `https://restcountries.com/v2/name/${name}`
const uriCountrieContinent = continent => `https://restcountries.com/v2/continent/${continent}`

// peticiones
const getCountrie = async (name) => {
    
    try {
        const res = await fetch( uriCountrieName(name) )
        const data = res.json()
        return data
    } catch (error) {
        console.log(error)
    }

}

//TODO: dejar para cuando funciona la api de rest countrie
const getCountriesOfContinets = async (continent) => {
    
    try {
        const res = await fetch( uriCountrieContinent(continent) )
        const data = res.json()
        return data
    } catch (error) {
        console.log(error)
    }

}

const getAllCountries = async () => {
    
    try {
        const res = await fetch( uriCountriesALl() )
        const data = res.json()
        return data
    } catch (error) {
        console.log(error)
    }

}


export {
    getCountrie,
    getAllCountries
}