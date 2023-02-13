let todo = document.querySelectorAll('.todo');
let placeholder = document.querySelector('.placeholder');
let create_todo = document.querySelector('.create_todo');
let todos = document.querySelector('.task_count');
let ul = document.querySelector('main .todos');
let label = document.querySelector('.todos label');
let update = document.querySelector('.update');
let task_count = document.querySelector('.task_count');
let sort = document.querySelector('.sort');
let toggle = document.querySelector('.container').children[1];
let ball = document.querySelector('.circle .ball');
let li = document.querySelectorAll('li');
let circle = document.querySelectorAll('.circle');
let items_left = document.querySelector('.items_left');
let clear_completed = document.querySelector('.clear_completed');
let drag_drop = document.querySelector('.drag_drop');
let body = document.querySelector('body');
let check_box = document.querySelectorAll('.check');
let count = 0;
let length = 0;

toggle.addEventListener('click', () =>{
    let addClass = (element, classname) =>{
        element.classList.toggle(classname);
    }
    addClass(toggle, 'span_light_mode');
    addClass(create_todo, 'light_mode');
    addClass(ball, 'light_mode');
    addClass(placeholder, 'light_mode');
    addClass(todos, 'light_mode');
    addClass(items_left, 'light_mode');
    addClass(clear_completed, 'light_mode');
    addClass(sort, 'light_mode');
    addClass(drag_drop, 'light_mode');
    addClass(body, 'light_mode');

    for(let i = 0; i < ul.children.length; i++){
        addClass(li[i], 'light_mode');
        addClass(circle[i + 1], 'light_mode');
        addClass(todo[i], 'light_mode');
    }

})

ul.addEventListener('pointerover', e =>{
    check_box = document.querySelectorAll('.check');
    for(let i = 0; i < ul.children.length; i++){
        i = i;
        // the reason why i declare it over here is because
        // if you declare it above the number of li will not be updated
        // it will remain 6, but if you declare it inside here everytime you hover
        // the ul, the number of li will be updated as well as the length
        // of the li same for the other elements
        let li = document.querySelectorAll('li');
        
        //the reason that i go with nesting the children is because
        // when you simply declare it like this
        // let cirlce = document.querySelectorAll('.circle')
        // for some reason if you do it like that it will cause a bug
        let circle = li[i].children[0].children[1];
        let back_circle = li[i].children[0].children[2];
        
        li[i].addEventListener('pointerover', e =>{
            li[i].children[1].classList.add('x_hover');
        });

        li[i].addEventListener('pointerleave', e =>{
            li[i].children[1].classList.remove('x_hover');
        });

        circle.addEventListener('pointerover', e =>{
            circle.classList.add('circle_no_border');
            back_circle.classList.add('back_circle_visible');
        });

        circle.addEventListener('pointerleave', e =>{
            circle.classList.remove('circle_no_border');
            back_circle.classList.remove('back_circle_visible');
        });
    }
});

create_todo.addEventListener('click', e =>{
    placeholder.textContent = 'Currently typing';
    if(e.target === create_todo.children[2]){
        placeholder.textContent = 'Currently typing';
    } else {
        placeholder.textContent = 'Create a new todo...';
    }
});

function todoCounter(target, check_box){
    if(target === check_box && target.checked){
        count++;
    } else{
        if(count < 0){
            count = 0;
        }
        count--;
    }
    update.innerHTML = ul.children.length - count;
}

let new_li;
let execute = false;

create_todo.children[2].addEventListener('keypress', e =>{
    if(e.key === 'Enter'){
        execute = true;
        console.log(execute);
        let value = create_todo.children[2].value;
        new_li = document.createElement('li');//append to the ul
        let new_label = document.createElement('label');//append to the li
        let new_checkbox = document.createElement('input');//append to the label
        let new_span = document.createElement('span');//append to the label
        let new_img = document.createElement('img');//append to the span
        let new_span2 = document.createElement('span');//append to the label
        let new_span3 = document.createElement('span');//append to the label
        new_span3.textContent = value;
        let new_span4 = document.createElement('span');//append to the li

        //setting the attribute and adding a class
        let setAttr = (element, type, the_name) =>{
            element.setAttribute(type, the_name);
        }
        setAttr(new_li, 'draggable', 'true');
        setAttr(new_checkbox, 'type', 'checkbox');
        setAttr(new_checkbox, 'class', 'check');
        setAttr(new_span, 'class', 'circle');
        setAttr(new_img, 'src', "./images/icon-check.svg");
        setAttr(new_img, 'class', 'image_check');
        setAttr(new_span2, 'class', 'back_circle');
        setAttr(new_span3, 'class', 'todo');
        setAttr(new_span4, 'class', 'x');

        //appending the elements
        let append = (parent, child) =>{
            parent.appendChild(child);
        }
        append(new_label, new_checkbox);
        append(new_label, new_span);
        append(new_span, new_img);
        append(new_label, new_span2);
        append(new_label, new_span3);
        append(new_li, new_label);
        append(new_li, new_span4);
        append(ul, new_li);

        new_checkbox.addEventListener('click', e => {
            todoCounter(e.target, new_checkbox)
        });
        update.innerHTML = ul.children.length - count;
    }
});

check_box.forEach(check => {
    check.addEventListener('click', e => {
        todoCounter(e.target, check)
    })
})

ul.addEventListener('click', e =>{
    let li = document.querySelectorAll('li');
    let x = document.querySelectorAll('.x');
    check_box = document.querySelectorAll('.check');

    for(let i = 0; i < ul.children.length; i++){
        check_box = document.querySelectorAll('.check');
        if(e.target === x[i]){
            if(x[i].parentNode.children[0].children[0].checked){
                count--;
                if(count < 0){
                    count = 0;
                }
            }
            ul.removeChild(li[i]);
            update.innerHTML = ul.children.length - count;
        }
    }
});

task_count.addEventListener('click', e =>{
    let all = task_count.children[1];
    let active = task_count.children[2];
    let completed = task_count.children[3];
    let clear_completed = task_count.children[4];
    li = document.querySelectorAll('li');
    
    if(e.target === completed){
        for(let i = 0; i <= ul.children.length; i++){
            try{
                if(!li[i].children[0].children[0].checked){
                    li[i].style.display = 'none';
                }
            } catch(err){
                
            }
        }
    } else if(e.target === active){
        for(let i = 0; i <= ul.children.length; i++){
            try{
                if(li[i].children[0].children[0].checked){
                    li[i].style.display = 'none';
                }
            } catch(err){
                
            }
        }
    } else if(e.target === clear_completed){
        li.forEach(e => {
            if(e.children[0].children[0].checked){
                e.remove();
                count = 0;
            }
        });
    } else {
       for(let i = 0; i < ul.children.length; i++){
        try{
            li[i].style.display = 'flex';
            if(execute){
                new_li.style.display = 'flex';
            }
        } catch(err){
            
        }
       }
   }
});

sort.addEventListener('click', e =>{
    let all = sort.children[0];
    let active = sort.children[1];
    let completed = sort.children[2];
    if(e.target === completed){
        for(let i = 0; i <= ul.children.length; i++){
            try{
                if(!li[i].children[0].children[0].checked){
                    li[i].style.display = 'none';
                    if(execute){
                        new_li.style.display = 'none';
                    }
                }
            } catch(err){
                
            }
        }
    } else if(e.target === active){
        for(let i = 0; i <= ul.children.length; i++){
            try{
                if(li[i].children[0].children[0].checked){
                    li[i].style.display = 'none';
                }
            } catch(err){
                
            }
        }
    } else {
        for(let i = 0; i < ul.children.length; i++){
            try{
                li[i].style.display = 'flex';
                if(execute){
                    new_li.style.display = 'flex';
                }
            } catch(err){

            }
            
        }
    }
});

for(let i = 0; i < ul.children.length; i++){
    li[i].setAttribute('draggable', 'true');
    ul.addEventListener('dragstart', e =>{
        e.target.classList.add('dragging');
    });

    ul.addEventListener('dragend', e =>{
        e.target.classList.remove('dragging');
    });

    ul.addEventListener('dragover', e =>{
        e.preventDefault();
        let dragging = '';
        dragging = document.querySelector('.dragging');
        let not_dragging = [...document.querySelectorAll('li:not(.dragging)')];

        let afterElement = not_dragging.reduce((closest, element) =>{
            let box = element.getBoundingClientRect();
            let offset = e.clientY - box.top - box.height / 2;
            if(offset < 0 && offset > closest.offset){
                return {offset: offset, child: element}
            } else{
                return closest
            }

        }, {offset:Number.NEGATIVE_INFINITY}).child;
        
        if(afterElement === null){
            ul.appendChild(dragging);
        } else{
            ul.insertBefore(dragging, afterElement);
        }
    });
}