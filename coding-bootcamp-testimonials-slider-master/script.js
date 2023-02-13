let image = document.querySelector('.image_container');
let oval = document.querySelector('.oval').children;
let john = document.querySelector('.john');
let girl = document.querySelector('.name');
let john_job = document.querySelector('.john_job');
let testimonial = document.querySelector('.testimonial').children;
let job = document.querySelector('.job');
console.log();

oval[0].addEventListener('click', ()=>{
    image.classList.remove('john_img');
    testimonial[0].style.opacity = '1';
    girl.style.opacity = '1';
    job.style.opacity = '1';

    testimonial[1].style.opacity ='0';
    john.style.opacity = '0';
    john_job.style.opacity = '0';
});

oval[1].addEventListener('click', ()=>{
    image.classList.add('john_img');
    testimonial[0].style.opacity = '0';
    girl.style.opacity = '0';
    job.style.opacity = '0';

    testimonial[1].style.opacity ='1';
    john.style.opacity = '1';
    john_job.style.opacity = '1';
});
