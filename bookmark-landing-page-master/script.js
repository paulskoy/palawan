let hamburger = document.querySelector('.hamburger');
let hamburger_child = document.querySelectorAll('.hamburger span');
let overlay = document.querySelector('nav .overlay');
let accordion = document.querySelector('.fourth_part .accordion');
let answer1 = document.querySelector('.fourth_part .accordion .answer1');
let answer2 = document.querySelector('.fourth_part .accordion .answer2');
let answer3 = document.querySelector('.fourth_part .accordion .answer3');
let answer4 = document.querySelector('.fourth_part .accordion .answer4');
let question1 = document.querySelector('.fourth_part .accordion .question1');
let question2 = document.querySelector('.fourth_part .accordion .question2');
let question3 = document.querySelector('.fourth_part .accordion .question3');
let question4 = document.querySelector('.fourth_part .accordion .question4');
let arrow1 = document.querySelector('.fourth_part .accordion .question1 .arrow');
let arrow2 = document.querySelector('.fourth_part .accordion .question2 .arrow');
let arrow3 = document.querySelector('.fourth_part .accordion .question3 .arrow');
let arrow4 = document.querySelector('.fourth_part .accordion .question4 .arrow');
let email = document.querySelector('footer .first_part_footer .warning input[type="email"] ');
let warning = document.querySelector('footer .first_part_footer .warning');
let container1 = document.querySelector('main .second_part .container1');
let conatiner = document.querySelector('main .second_part .container');
let simple = document.querySelector('main .second_part .container1 .simple_bookmarking');
let speedy = document.querySelector('main .second_part .container1 .speedy_searching');
let easy = document.querySelector('main .second_part .container1 .easy_sharing');
let tab1 = document.querySelector('main .second_part .image_container .hero');
let tab1_bookmark = document.querySelector('main .second_part .container .bookmark_one_click');
let tab1_text = document.querySelector('main .second_part .container .text_bookmark');
let tab2 = document.querySelector('main .second_part .image_container .tab2');
let tab2_intelligent = document.querySelector('main .second_part .container .intelligent_search');
let tab2_text = document.querySelector('main .second_part .container .text_intelligent');
let tab3 = document.querySelector('main .second_part .image_container .tab3');
let tab3_share = document.querySelector('main .second_part .container .share_your_bookmarks');
let tab3_text = document.querySelector('main .second_part .container .text_share');
let container = document.querySelector('main .second_part .container');

hamburger.addEventListener('click', e =>{
    hamburger_child.forEach(child =>{
        child.classList.toggle('hover');
    });
    overlay.classList.toggle('toggle');
}); 

accordion.addEventListener('click', e =>{
    switch(e.target){
        case arrow1:
            answer1.classList.toggle('open');
            question1.classList.toggle('open');
            arrow1.classList.toggle('open');
        break;

        case arrow2:
            answer2.classList.toggle('open');
            question2.classList.toggle('open');
            arrow2.classList.toggle('open');
        break;

        case arrow3:
            answer3.classList.toggle('open');
            question3.classList.toggle('open');
            arrow3.classList.toggle('open');
        break;

        case arrow4:
            answer4.classList.toggle('open');
            question4.classList.toggle('open');
            arrow4.classList.toggle('open');
        break;

        default:
            console.log('error');
        break;
    }
    
});

email.addEventListener('keypress', e =>{
    if(e.key === 'Enter'){
         if(!email.value.includes('@gmail.com')){
            email.classList.add('error');
            warning.classList.add('visible');
         } else{
            email.classList.remove('error');
            warning.classList.remove('visible');
         }
    }
});

function tab1_add(){
    tab1.classList.add('visible');
    tab1_bookmark.classList.add('visible');
    tab1_text.classList.add('visible');

    tab1.classList.remove('not_visible');
    tab1_bookmark.classList.remove('not_visible');
    tab1_text.classList.remove('not_visible');
    container.classList.remove('tab2');
    container.classList.remove('tab3');
}

function tab1_remove(){
    tab1.classList.add('not_visible');
    tab1_bookmark.classList.add('not_visible');
    tab1_text.classList.add('not_visible');

    tab1.classList.remove('visible');
    tab1_bookmark.classList.remove('visible');
    tab1_text.classList.remove('visible');
}

function tab2_add(){
    tab2.classList.add('visible');
    tab2_intelligent.classList.add('visible');
    tab2_text.classList.add('visible');
    container.classList.add('tab2');

    container.classList.remove('tab1');
    container.classList.remove('tab3');
}

function tab2_remove(){
    tab2.classList.remove('visible');
    tab2_intelligent.classList.remove('visible');
    tab2_text.classList.remove('visible');
}

function tab3_add(){
    tab3.classList.add('visible');
    tab3_share.classList.add('visible');
    tab3_text.classList.add('visible');
    container.classList.add('tab3');

    container.classList.remove('tab1');
    container.classList.remove('tab2');
}

function tab3_remove(){
    tab3.classList.remove('visible');
    tab3_share.classList.remove('visible');
    tab3_text.classList.remove('visible');
}

container1.addEventListener('click', e=>{
    if(e.target === simple){
        tab1_add();
        tab2_remove();
        tab3_remove();
    } else if(e.target === speedy){
        tab2_add();
        tab1_remove();
        tab3_remove();
    } else if(e.target === easy){
        tab3_add();
        tab2_remove();
        tab1_remove();
    }
});