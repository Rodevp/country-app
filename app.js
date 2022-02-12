import { render } from './js/render.js'

fetch('https://restcountries.com/v2/all')
    .then(res => res.json() )
    .then(data => console.log(data) )
    .catch(error => console.log(error) )