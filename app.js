import { createCard, createModal } from './js/render.js'
import {
    getAllCountries,
    getCountrie,
    getCountriesOfContinets
} from './js/api.js'
import { parseDataCountrie } from './js/utils.js'

const search = document.getElementById('search')
const cardsContent = document.getElementById('cards')
const changeContinent = document.getElementById('country_selected')
const fragment = document.createDocumentFragment()

const countriesCopy = []
const allCountries = getAllCountries()

const closeModal = e => {

    if (e.target.dataset.countrie === e.target.dataset.countrieeval) {
        const modal = document.getElementById('modal')
        modal.style.transform = 'scale(0)'
    }

}

const detailCountrie = e => {

    if (e.target.dataset.namecountrie === e.target.dataset.namecountrieeval) {

        getCountrie(e.target.dataset.namecountrie)
            .then(data => {

                const modal = document.getElementById('modal')
                modal.style.transform = 'scale(1)'
                const dataModal = createModal(parseDataCountrie(data)[0], closeModal)
                modal.appendChild(dataModal)
            })
            .catch(error => console.log(error))

    }

}

allCountries
    .then(data => {

        localStorage.setItem('countries', JSON.stringify(parseDataCountrie(data)))
        
        countriesCopy.length = 0
        countriesCopy.push(...parseDataCountrie(data))

        parseDataCountrie(data).forEach((countrie) => {
            cardsContent.innerHTML = ''
            const card = createCard(detailCountrie, countrie)
            fragment.appendChild(card)
        })

        cardsContent.appendChild(fragment)

    })
    .catch(error => console.log(error))


search.addEventListener('input', e => {

    if (e.target.value !== '') {

        const filterCoutrie = [...JSON.parse(localStorage.getItem('countries'))]
            .filter(countrie => countrie.name.includes(e.target.value.toLowerCase()))

        localStorage.setItem('countries', JSON.stringify(filterCoutrie))

        filterCoutrie.forEach((countrie) => {
            cardsContent.innerHTML = ''
            const card = createCard(detailCountrie, countrie)
            fragment.appendChild(card)
        })

        cardsContent.appendChild(fragment)

    } else {

        countriesCopy.forEach((countrie) => {
            cardsContent.innerHTML = ''
            const card = createCard(detailCountrie, countrie)
            fragment.appendChild(card)
        })

        cardsContent.appendChild(fragment)

        localStorage.setItem('countries', JSON.stringify(countriesCopy))
    }

})

changeContinent.addEventListener('change', async (e) => {

    localStorage.setItem('current', e.target.value)
    
    if (e.target.value === 'all') {

        localStorage.setItem('countries', JSON.stringify( parseDataCountrie(await allCountries) ) )
        countriesCopy.length = 0
        countriesCopy.push(...parseDataCountrie(await allCountries))

        parseDataCountrie( await allCountries ).forEach((countrie) => {
            
            cardsContent.innerHTML = ''
            const card = createCard(detailCountrie, countrie)
            fragment.appendChild(card)

        })

        cardsContent.appendChild(fragment)
    }

    if (localStorage.getItem('current') === e.target.value && localStorage.getItem('current') !== 'all') {
        
        localStorage.setItem('countries', JSON.stringify( parseDataCountrie( await getCountriesOfContinets(e.target.value) ) ) )
        countriesCopy.length = 0
        countriesCopy.push(...parseDataCountrie( await getCountriesOfContinets(e.target.value) ) )

        parseDataCountrie( await getCountriesOfContinets(e.target.value) ).forEach((countrie) => {
            
            cardsContent.innerHTML = ''
            const card = createCard(detailCountrie, countrie)
            fragment.appendChild(card)

        })

        cardsContent.appendChild(fragment)
    }


})
