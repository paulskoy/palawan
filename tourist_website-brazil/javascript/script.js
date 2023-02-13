let body = document.querySelector('body')
let nav = document.querySelector('nav')
let side_pop_up = document.querySelector('.side-pop-up')
let burger_container = document.querySelector('.burger-container')
let accordion_text = document.querySelector('.main-travel-information .accordion .accordion-text')
let main_travel_information = document.querySelector('.main-travel-information')

let side_pop_up_children = [...side_pop_up.children[0].children]
side_pop_up_children.forEach(child => {
    child.addEventListener('click', () => {
        burger_container.classList.toggle('click')
        side_pop_up.classList.toggle('visible')
    })
})

body.addEventListener('click', e => {
    if(side_pop_up.classList.contains('visible') && burger_container.classList.contains('click')){
        if(e.target !== side_pop_up || e.target !== side_pop_up.children[0]){
            burger_container.classList.toggle('click')
            side_pop_up.classList.toggle('visible')
        }

    } else if(e.target === burger_container){
        burger_container.classList.toggle('click')
        side_pop_up.classList.toggle('visible')
    }
})

main_travel_information.addEventListener('click', e => {
    if(e.target.classList.contains('arrow')){
        e.target.classList.toggle('flip')
        e.target.parentElement.parentElement.children[1].classList.toggle('visible')
    }

    if(e.target.classList.contains('h2')){
        e.target.children[0].classList.toggle('flip')
        e.target.parentElement.children[1].classList.toggle('visible')
    }
})