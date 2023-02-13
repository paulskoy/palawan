let div = document.querySelector('div');
let span = document.querySelector('.name');

let eleven = './st4/eleven.webp';
let max = './st4/max.webp';
let mike = './st4/mike.webp';
let will = './st4/will.webp';
let lucas = './st4/lucas.webp';
let dustin = './st4/dustin.webp';

let strangerThingsSquad = [eleven, max, mike, will, lucas, dustin];
let character = ['eleven', 'max', 'mike', 'will', 'lucas', 'dustin'];

function changeImage(){
    setInterval(() =>{
        let random = Math.floor(Math.random() * strangerThingsSquad.length) + 0;
        let url = strangerThingsSquad[random];
        let fn = character[random].toUpperCase();
        console.log(url);
        div.style.backgroundImage = `url(${url})`;
        span.innerHTML = fn;
    }, 3000)
}
// div.style.backgroundImage = `url(${eleven})`;
// changeImage();

// let div = document.querySelector('.div');

// let getSomeData = async (resource) => {
//     let response = await fetch(resource);

//     if(response.status !== 200){
//         console.log('error fetching data');
//     }

//     let data = await response.json();
//     return data;
// }

// let random = setInterval(() => {
//     let random = Math.floor(Math.random() * 10) + 0;
//     getSomeData('music.json').then(data => {
//         div.innerHTML = `${data[random].song} by ${data[random].singer} duration is ${data[random].duration}`;
//     })
// }, 3000);