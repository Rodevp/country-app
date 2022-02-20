import { createCard, createModal } from './js/render.js'
import {
    getAllCountries,
    getCountrie
} from './js/api.js'
import { parseDataCountrie } from './js/utils.js'

const search = document.getElementById('search')
const cardsContent = document.getElementById('cards')
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

    console.log(e.target.value)

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
