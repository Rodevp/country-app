const changeTheme = () => {
    console.log('entré')
    const wraper = document.querySelector('main.ligth')
    const header = document.querySelector('header.ligth')
    const input = document.querySelector('input.ligth')
    const card = document.querySelectorAll('div.ligth')
    const li = document.querySelectorAll('li.ligth')
    const button = document.querySelectorAll('.button__card')

    wraper.classList.toggle('dark__mode_theme-Background')
    header.classList.toggle('dark__mode_theme_card')
    input.classList.toggle('dark__mode_theme_inputs')

    card.forEach(element => {
        element.classList.toggle('dark__mode_theme_card')
    });

    li.forEach(element => {
        element.classList.toggle('dark__mode_theme_card')
    });
    
    button.forEach(element => {
        element.classList.toggle('dark__mode_theme-Background')
        element.classList.toggle('dark__mode__theme_text')
    });

}

export {
    changeTheme
}