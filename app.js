import { createCard, createModal } from './js/render.js'
import {
    getAllCountries,
    getCountriesOfContinets,
    getCountrie
} from './js/api.js'
import { parseDataCountrie } from './js/utils.js'

const selectCountrie = document.getElementById('country_selecte')
const search = document.getElementById('search')
const cardsContent = document.getElementById('cards')
const fragment = document.createDocumentFragment()

const countriesCopy = []
const allCountries = getAllCountries()
allCountries
    .then(data => {
        
        localStorage.setItem('countries', JSON.stringify(parseDataCountrie(data)) )
        countriesCopy.push(...parseDataCountrie(data))
        
        parseDataCountrie(data).forEach( (countrie) => {
            cardsContent.innerHTML = ''
            const card = createCard(() => {}, countrie)
            fragment.appendChild(card)
        })

        cardsContent.appendChild(fragment)
        
    })
    .catch(error => console.log(error) )


selectCountrie.addEventListener('change', e => {
    console.log(e.target.value)
})

search.addEventListener('input', e => {

    console.log(e.target.value)
    
    if (e.target.value !== '') {
        


        const filterCoutrie = [...JSON.parse( localStorage.getItem('countries') ) ]
            .filter(countrie => countrie.name.includes( e.target.value.toLowerCase() ) )

        localStorage.setItem('countries', JSON.stringify(filterCoutrie) )

        filterCoutrie.forEach( (countrie) => {
            cardsContent.innerHTML = ''
            const card = createCard(() => {}, countrie)
            fragment.appendChild(card)
        })

        cardsContent.appendChild(fragment)

    } else {

        
        countriesCopy.forEach( (countrie) => {
            cardsContent.innerHTML = ''
            const card = createCard(() => {}, countrie)
            fragment.appendChild(card)
        })

        cardsContent.appendChild(fragment)

        localStorage.setItem('countries', JSON.stringify(countriesCopy) )
    }

})





