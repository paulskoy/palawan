let advice_number = document.querySelector('.advice-number .number');
let quote = document.querySelector('.container .advice');
let dice = document.querySelector('.container .dice-container');
console.log(dice);

let id, advice;

let getQoute = async (resource) => {
    let response = await fetch(resource);
    if(response.status !== 200) console.log('error');
    let data = response.json();

    return data;
}

dice.addEventListener('click', () =>{
    getQoute('https://api.adviceslip.com/advice')
        .then(({slip:{id, advice}}) => { //this is how u destructure data that you get using api
            id = id;
            advice = advice;
            advice_number.innerHTML = id;
            quote.innerHTML = advice;
        })
        .catch(err => console.log(err.message));
})
// setInterval(() => {
//     
// }, 5000);
