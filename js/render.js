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
    divCard.appendChild(btnCard)

    return divCard

}

const createModal = (data, event) => {
    
    //creando nodos del DOM
    const modal = document.createElement('div')
    const modalEffect = document.createElement('div')
    const modalInfo = document.createElement('div')
    const modalInfoCountry = document.createElement('div')
    const borderCountries = document.createElement('section')
    const borderCountriesContent = document.createElement('div')
    const borderCountrieOne = document.createElement('div')
    const borderCountrieTwo = document.createElement('div')
    const borderCountrieThree = document.createElement('div')

    const modalContentImage = document.createElement('div')
    const imgModal = document.createElement('img')
    const modalWrapperInfo = document.createElement('section')
    const closeModal = document.createElement('div')
    const titleModal = document.createElement('h2')
    const titleBorderCountries = document.createElement('h2')
    
    const modalInformationItems = document.createElement('ul')
    const moreModalInformationItems = document.createElement('ul')
    
    const nameNative = document.createElement('li')
    const population = document.createElement('li')
    const region = document.createElement('li')
    const subRegion = document.createElement('li')
    const capital = document.createElement('li')
    const domain = document.createElement('li')
    const currencie = document.createElement('li')
    const languages = document.createElement('li')

    //agregando atributos
    modal.classList.add('modal')
    modalEffect.classList.add('modal__effect')

    modalInfo.classList.add('modal__information')
    modalInfoCountry.classList.add('information__country')
    modalContentImage.classList.add('country__image_content')
    imgModal.setAttribute('src', `${data.flag}`)
    imgModal.setAttribute('alt', `countrie image`)

    modalWrapperInfo.classList.add('section__wrap')
    closeModal.classList.add('close__modal')
    titleModal.classList.add('country__name')

    modalInformationItems.classList.add('infomation__items')
    nameNative.classList.add('item')
    population.classList.add('item')
    region.classList.add('item')
    subRegion.classList.add('item')
    capital.classList.add('item')

    moreModalInformationItems.classList.add('more__information_items')
    domain.classList.add('more__information')
    currencie.classList.add('more__information')
    languages.classList.add('more__information')

    borderCountries.classList.add('border__countries')
    titleBorderCountries.classList.add('border__countries_title')
    borderCountriesContent.classList.add('countries__border')

    borderCountrieOne.classList.add('countrys__border_item')
    borderCountrieTwo.classList.add('countrys__border_item')
    borderCountrieThree.classList.add('countrys__border_item')

    //textos y más
    closeModal.textContent = 'X'
    closeModal.addEventListener('click', event)

    titleModal.textContent = data.name
    titleBorderCountries.textContent = 'Paises Vecinos'
    nameNative.textContent = `Nombre Nativo: ${data.nativeName}`
    population.textContent = `Población: ${data.population}`
    region.textContent = `Region: ${data.region}`
    subRegion.textContent =  `Sub-Region: ${data.subRegion}`
    capital.textContent = `Capital: ${data.capital}`
    domain.textContent = `Dominion: ${data.domain}`
    currencie.textContent = `Moneda: ${data.currencie}`
    languages.textContent = `Lemguajes ${data.languages[0]} ${data.languages[1]} ${data.languages[2]}`
    borderCountrieOne.textContent = data.borders[0]    
    borderCountrieTwo.textContent = data.borders[1]    
    borderCountrieThree.textContent = data.borders[2]    

    //componiendo modal
    modalInformationItems.appendChild(nameNative)
    modalInformationItems.appendChild(population)
    modalInformationItems.appendChild(region)
    modalInformationItems.appendChild(subRegion)
    modalInformationItems.appendChild(capital)

    moreModalInformationItems.appendChild(domain)
    moreModalInformationItems.appendChild(currencie)
    moreModalInformationItems.appendChild(languages)

    borderCountriesContent.appendChild(borderCountrieOne)
    borderCountriesContent.appendChild(borderCountrieTwo)
    borderCountriesContent.appendChild(borderCountrieThree)
    borderCountries.appendChild(titleBorderCountries)
    borderCountries.appendChild(borderCountriesContent)

    modalContentImage.appendChild(imgModal)
    modalInfo.appendChild(modalContentImage)
    modalInfo.appendChild(modalWrapperInfo)

    modalInfoCountry.appendChild(closeModal)
    modalInfoCountry.appendChild(titleModal)
    modalInfoCountry.appendChild(modalInformationItems)
    modalInfoCountry.appendChild(moreModalInformationItems)

    modalWrapperInfo.appendChild(modalInfoCountry)
    modalWrapperInfo.appendChild(borderCountries)

    modal.appendChild(modalEffect)
    modal.appendChild(modalInfo)

    return modal

}

export {
    createCard,
    createModal
}