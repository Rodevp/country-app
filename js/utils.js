const parseDataCountrie = (data) => {

    const dataCopy = [...data]
    const newData = dataCopy.map( dataOfCountrie => {
        
        const dataParse = {
            name: dataOfCountrie.name,
            domain: dataOfCountrie.topLevelDomain,
            region: dataOfCountrie.region,
            subRegion: dataOfCountrie.subregion,
            population: dataOfCountrie.population,
            nativeName: dataOfCountrie.nativeName,
            currencie: dataOfCountrie.currencies[0].code,
            languages: dataOfCountrie.languages.map(lan => lan.name),
            borders: dataOfCountrie.borders.slice(0, 3),
            flag: dataOfCountrie.flags.svg ,
            capital: dataOfCountrie.capital
        }
        
        return dataParse
    })
    
    return newData

}

export {
    parseDataCountrie
}