import { createCard, createModal } from './js/render.js'
import {
    getAllCountries,
    getCountriesOfContinets,
    getCountrie
} from './js/api.js'
import { parseDataCountrie } from './js/utils.js'

console.log( createCard( () => {}, {}) )
console.log( createModal( {languages: [1,2,3], borders: [1,2,3] }, () => {} ) )