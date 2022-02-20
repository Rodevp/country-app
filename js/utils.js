const validData = (data) => {

    if (data.length === 1 ) return [...data, '-', '-']

    if (data.length > 3 ) return [data[0], data[1], data[2]]
    
    return [...data, '-', '-']

}

const parseObjValuesToArray = obj => {
    
    const arr = []
    
    for (const key in obj) {

        arr.push(obj[key])

    }

    return arr
}

const getCurencies = obj => {
    const arr = []
    
    for (const key in obj) {

        arr.push(obj[key].name)

    }

    return arr
}

const parseDataCountrie = (data) => {

    const dataCopy = [...data]

    const newData = dataCopy.map( dataOfCountrie => {

        const borders = dataOfCountrie.borders === undefined 
            ? ['-', '-', '-']
            : dataOfCountrie.borders

        const currencie = dataOfCountrie.currencies !== undefined 
            ? getCurencies(dataOfCountrie.currencies)[0]
            : ''

        const languages = validData( parseObjValuesToArray(dataOfCountrie.languages) )

        const dataParse = {
            name: dataOfCountrie.name.common.toLowerCase(),
            domain: dataOfCountrie.tld,
            region: dataOfCountrie.region,
            subRegion: dataOfCountrie.subregion,
            population: dataOfCountrie.population,
            currencie: currencie,
            languages: languages,
            borders: validData( borders ),
            flag: dataOfCountrie.flags.svg ,
            capital: dataOfCountrie.capital === undefined ? 'Se desconoce' : dataOfCountrie.capital[0]
        }

        return dataParse
    })
    
    return newData

}

export {
    parseDataCountrie
}