let container = document.querySelector('.second_part .container');
let input = document.querySelector('.second_part input');
let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');
let del = document.querySelector('.del');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let add = document.querySelector('.add');
let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let minus = document.querySelector('.minus');
let dot = document.querySelector('.dot');
let zero = document.querySelector('.zero');
let divide = document.querySelector('.divide');
let multiply = document.querySelector('.multiply');
let reset = document.querySelector('.reset')
let equals = document.querySelector('.equals');
let first = document.querySelector('.first_part .oval .first');
let second = document.querySelector('.first_part .oval .second');
let third = document.querySelector('.first_part .oval .third');
let body = document.querySelector('body');
let calc = document.querySelector('.calc');
let theme = document.querySelector('.theme');
let oval = document.querySelector('.container .oval');
let ball = document.querySelector('.oval .ball');
let span = document.querySelectorAll('.second_part .container span');
let theme_numbers = document.querySelectorAll('.small_box .numbers');

input.addEventListener('keydown', e =>{
    switch(e.key){
        case '7':
            seven.classList.add('press');
            break;
        
        case '8':
            eight.classList.add('press');
            break;

        case '9':
            nine.classList.add('press');
            break;
        
        case 'Delete':
        case 'Backspace':
            del.classList.add('press');
            break;

        case '4':
            four.classList.add('press');
            break;
        
        case '5':
            five.classList.add('press');
            break;

        case '6':
            six.classList.add('press');
            break;
        
        case '+':
            add.classList.add('press');
            break;

        case '1':
            one.classList.add('press');
            break;
        
        case '2':
            two.classList.add('press');
            break;

        case '3':
            three.classList.add('press');
            break;
        
        case '-':
            minus.classList.add('press');
            break;

        case '.':
            dot.classList.add('press');
            break;
        
        case '0':
            zero.classList.add('press');
            break;

        case '/':
            divide.classList.add('press');
            break;
        
        case 'x':
        case '*':
            multiply.classList.add('press');
            break;

        case 'c':
            reset.classList.add('press');
            break;
        
        case 'Enter':
        case '=':
            equals.classList.add('press');
            break;
    }

});

input.addEventListener('keyup', e =>{
    switch(e.key){
        case '7':
            seven.classList.remove('press');
            break;
        
        case '8':
            eight.classList.remove('press');
            break;

        case '9':
            nine.classList.remove('press');
            break;
        
        case 'Delete':
        case 'Backspace':
            del.classList.remove('press');
            break;

        case '4':
            four.classList.remove('press');
            break;
        
        case '5':
            five.classList.remove('press');
            break;

        case '6':
            six.classList.remove('press');
            break;
        
        case '+':
            add.classList.remove('press');
            break;

        case '1':
            one.classList.remove('press');
            break;
        
        case '2':
            two.classList.remove('press');
            break;

        case '3':
            three.classList.remove('press');
            break;
        
        case '-':
            minus.classList.remove('press');
            break;

        case '.':
            dot.classList.remove('press');
            break;
        
        case '0':
            zero.classList.remove('press');
            break;

        case '/':
            divide.classList.remove('press');
            break;
        
        case 'x':
        case '*':
            multiply.classList.remove('press');
            break;

        case 'c':
            reset.classList.remove('press');
            break;
        
        case 'Enter':
        case '=':
            equals.classList.remove('press');
            break;
    }
});

input.addEventListener('keypress', e =>{
    switch(e.key){
        case 'c':
            input.value = '';
            e.preventDefault();
            break;

        case 'Enter':
            try{
                input.value = eval(input.value);
            } catch{
                input.value = 'Error!'
            }
            break;
    }
});

let toggle = (element, classname) =>{
    element.classList.add(classname);
}

let remove = (element, classname) =>{
    element.classList.remove(classname);
}

oval.addEventListener('click', e =>{
    if(e.target.value === 'theme1'){
        remove(body, 'theme2');
        remove(body, 'theme3');
        remove(calc, 'theme2');
        remove(calc, 'theme3')
        remove(theme, 'theme2');
        remove(theme, 'theme3');
        remove(oval, 'theme2');
        remove(oval, 'theme3');
        remove(ball, 'theme2');
        remove(ball, 'theme3');
        remove(input, 'theme2');
        remove(input, 'theme3');
        remove(container, 'theme2');
        remove(container, 'theme3');
        span.forEach(span =>{
            remove(span, 'theme2');
            remove(span, 'theme3');
        });
    
        theme_numbers.forEach(span =>{
            remove(span, 'theme2');
            remove(span, 'theme3');
        });
    } else if(e.target.value === 'theme2'){
        toggle(body, 'theme2');
        toggle(calc, 'theme2');
        toggle(theme, 'theme2');
        toggle(oval, 'theme2');
        toggle(ball, 'theme2');
        toggle(input,'theme2');
        toggle(container, 'theme2');
    
        span.forEach(span =>{
            toggle(span, 'theme2');
        });
    
        theme_numbers.forEach(span =>{
            toggle(span, 'theme2');
        });
    
        remove(body, 'theme1');
        remove(body, 'theme3');
        remove(calc, 'theme1');
        remove(calc, 'theme3')
        remove(theme, 'theme1');
        remove(theme, 'theme3');
        remove(oval, 'theme1');
        remove(oval, 'theme3');
        remove(ball, 'theme1');
        remove(ball, 'theme3');
        remove(input, 'theme1');
        remove(input, 'theme3');
        remove(container, 'theme1');
        remove(container, 'theme3');
    
        span.forEach(span =>{
            remove(span, 'theme1');
            remove(span, 'theme3');
        });
    
        theme_numbers.forEach(span =>{
            remove(span, 'theme1');
            remove(span, 'theme3');
        });
    } else if(e.target.value === 'theme3'){
        toggle(body, 'theme3');
        toggle(calc, 'theme3');
        toggle(theme, 'theme3');
        toggle(oval, 'theme3');
        toggle(ball, 'theme3');
        toggle(input,'theme3');
        toggle(container, 'theme3');
    
        span.forEach(span =>{
            toggle(span, 'theme3');
        });
    
        theme_numbers.forEach(span =>{
            toggle(span, 'theme3');
        })
    
        remove(body, 'theme2');
        remove(body, 'theme1');
        remove(calc, 'theme2');
        remove(calc, 'theme1')
        remove(theme, 'theme2');
        remove(theme, 'theme1');
        remove(oval, 'theme2');
        remove(oval, 'theme1');
        remove(ball, 'theme2');
        remove(ball, 'theme1');
        remove(input, 'theme2');
        remove(input, 'theme1');
        remove(container, 'theme2');
        remove(container, 'theme1');
    
        span.forEach(span =>{
            remove(span, 'theme2');
            remove(span, 'theme1');
        });
    
        theme_numbers.forEach(span =>{
            remove(span, 'theme2');
            remove(span, 'theme1');
        });
    }
});