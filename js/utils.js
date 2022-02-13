const validData = (data) => {

    if (typeof data === "undefined" ) return ['X', 'X', 'X']

    if (typeof data === "object" ) return ['X', 'X', 'X']

    if (data.length === 1 ) return [...data, 'X', 'X']

    if (data.length > 3 ) return data.slice(0, 3)
    
    if (data.length < 3 ) return [...data, 'X']

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
            languages: validData( dataOfCountrie.languages.map(lan => lan.nativeName)  ),
            borders: validData( dataOfCountrie.borders),
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