const createCard = (event, data) => {

    //creando nodos del DOM
    const divCard = document.createElement('div')
    const wrapperTitle = document.createElement('div')
    const cardImageContent = document.createElement('div')
    const imgCard = document.createElement('img')
    const cardTitle = document.createElement('h3')
    const cardInformation = document.createElement('section')
    const ulInformation = document.createElement('ul')
    const infoItemPoblation = document.createElement('li')
    const infoRegion = document.createElement('li')
    const infoItemCapital = document.createElement('li')
    const contentBTN = document.createElement('div')
    const btnCard = document.createElement('button')

    //creando atributos
    divCard.classList.add('card')
    wrapperTitle.classList.add('wapper__title')
    cardImageContent.classList.add('card__image-content')
    cardTitle.classList.add('card__title')
    
    cardInformation.classList.add('card__information')
    ulInformation.classList.add('information')
    infoItemCapital.classList.add('info__item')
    infoRegion.classList.add('info__item')
    infoItemPoblation.classList.add('info__item')

    contentBTN.classList.add('content__btn')
    btnCard.classList.add('button__card')
    
    imgCard.classList.add('card__image')
    imgCard.setAttribute('src', `${data.flag}`)
    imgCard.setAttribute('alt', 'image of countrie')

    
    //textos y más
    btnCard.textContent = 'Ver más'
    btnCard.addEventListener('click', event)
    
    cardTitle.textContent = data.name
    infoItemCapital.textContent = data.capital
    infoItemPoblation.textContent = data.population
    infoItemCapital.textContent = data.capital

    //componiendo card

    cardImageContent.appendChild(imgCard)
    wrapperTitle.appendChild(cardImageContent)
    wrapperTitle.appendChild(cardTitle)

    ulInformation.appendChild(infoItemPoblation)
    ulInformation.appendChild(infoRegion)
    ulInformation.appendChild(infoItemCapital)
    cardInformation.appendChild(ulInformation)

    divCard.appendChild(wrapperTitle)
    divCard.appendChild(cardInformation)


    return divCard

}

const createModal = () => {

}

const render = ( countries = [], filter = '', renderElementsIn) => {
    console.log('render', countries, filter, renderElementsIn)
}

export {
    render,
    createCard
}