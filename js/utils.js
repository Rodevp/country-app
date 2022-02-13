const validBorder = (borders) => {

    if (borders === undefined ) return ['', '', '']

    if (borders.length === 1 ) return [...borders, '', '']

    
    if (borders.length > 3 ) return borders.slice(0, 3)
    
    if (borders.length < 3 ) return [...borders, '']

}



const parseDataCountrie = (data) => {

    const dataCopy = [...data]

    const newData = dataCopy.map( dataOfCountrie => {
        
        const dataParse = {
            name: dataOfCountrie.name.toLowerCase(),
            domain: dataOfCountrie.topLevelDomain,
            region: dataOfCountrie.region,
            subRegion: dataOfCountrie.subregion,
            population: dataOfCountrie.population,
            nativeName: dataOfCountrie.nativeName,
            currencie: dataOfCountrie.currencies !== undefined ? dataOfCountrie.currencies[0].code : '',
            languages: dataOfCountrie.languages.map(lan => lan.name),
            borders: validBorder(dataOfCountrie.borders),
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