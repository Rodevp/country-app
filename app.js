import { createCard, createModal } from './js/render.js'
import {
    getAllCountries,
    getCountrie
} from './js/api.js'
import { parseDataCountrie } from './js/utils.js'

const search = document.getElementById('search')
const cardsContent = document.getElementById('cards')
const fragment = document.createDocumentFragment()

localStorage.setItem('currentTheme', 'ligth')
localStorage.setItem('detailCountrie', '[]')
const countriesCopy = []
const allCountries = getAllCountries()

const detailCountrie = e => {

    console.log(e.target.dataset)

    if (e.target.dataset.namecountrie === e.target.dataset.namecountrieeval) {
        getCountrie(e.target.dataset.namecountrie)
            .then( data => {
                
                const modal = document.getElementById('modal')
                modal.classList.add('open__modal')
                modal.style.transform = 'scale(1)'
                console.log('hola xd',parseDataCountrie(data))
                const dataModal = createModal(parseDataCountrie(data)[0], () => {})
                modal.appendChild(dataModal)
                //localStorage.setItem('detailCountrie', JSON.stringify(parseDataCountrie(data[0]) ) )
            })  
            .catch(error => console.log(error) )
    }

}

allCountries
    .then(data => {
        
        localStorage.setItem('countries', JSON.stringify(parseDataCountrie(data)) )
        countriesCopy.push(...parseDataCountrie(data))
        
        parseDataCountrie(data).forEach( (countrie) => {
            cardsContent.innerHTML = ''
            const card = createCard(detailCountrie, countrie)
            fragment.appendChild(card)
        })

        cardsContent.appendChild(fragment)

    })
    .catch(error => console.log(error) )


search.addEventListener('input', e => {

    console.log(e.target.value)
    
    if (e.target.value !== '') {

        const filterCoutrie = [...JSON.parse( localStorage.getItem('countries') ) ]
            .filter(countrie => countrie.name.includes( e.target.value.toLowerCase() ) )

        localStorage.setItem('countries', JSON.stringify(filterCoutrie) )

        filterCoutrie.forEach( (countrie) => {
            cardsContent.innerHTML = ''
            const card = createCard(detailCountrie, countrie)
            fragment.appendChild(card)
        })

        cardsContent.appendChild(fragment)

    } else {

        
        countriesCopy.forEach( (countrie) => {
            cardsContent.innerHTML = ''
            const card = createCard(detailCountrie, countrie)
            fragment.appendChild(card)
        })

        cardsContent.appendChild(fragment)

        localStorage.setItem('countries', JSON.stringify(countriesCopy) )
    }

})



