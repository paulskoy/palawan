let nav_bar = document.querySelector('#nav #container')
let arrow_up = document.querySelector('section .arrow')
let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting === false){
            arrow_up.classList.add('show')
        } else{
            arrow_up.classList.remove('show')
        }
    })
},{threshold: 0.1})

arrow_up.addEventListener('click', () => {
    arrow_up.classList.toggle('show')
})
observer.observe(nav_bar)