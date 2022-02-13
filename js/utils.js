const validData = (data) => {

    if (data.length === 1 ) return [...data, '-', '-']

    if (data.length > 3 ) return [data[0], data[1], data[2]]
    
    return [...data, '-', '-']

}


const parseDataCountrie = (data) => {

    const dataCopy = [...data]

    const newData = dataCopy.map( dataOfCountrie => {

        const borders = dataOfCountrie.borders === undefined 
            ? ['-', '-', '-']
            : dataOfCountrie.borders

        const dataParse = {
            name: dataOfCountrie.name.toLowerCase(),
            domain: dataOfCountrie.topLevelDomain,
            region: dataOfCountrie.region,
            subRegion: dataOfCountrie.subregion,
            population: dataOfCountrie.population,
            nativeName: dataOfCountrie.nativeName,
            currencie: dataOfCountrie.currencies !== undefined ? dataOfCountrie.currencies[0].code : '',
            languages: validData( dataOfCountrie.languages.map(lan => lan.nativeName) ),
            borders: validData( borders ),
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