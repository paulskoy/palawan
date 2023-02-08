let hamburger = document.querySelector('.mobile-nav .hamburger')
let side_pop = document.querySelector('.mobile-side-pop-up')
let close = document.querySelector('.mobile-side-pop-up .close')

hamburger.addEventListener('click', () => {
    side_pop.classList.add('open')
})

close.addEventListener('click', () => {
    side_pop.classList.remove('open')
})