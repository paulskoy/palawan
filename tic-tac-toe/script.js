let board = document.querySelector('.board');
let cells = document.querySelectorAll('.cell');
let turn = document.querySelector('.turn span');
let x_total_score = document.querySelector('.scoreboard .x-score div');
let circle_total_score = document.querySelector('.scoreboard .circle-score div');
let x_class = 'x';
let circle_class = 'circle';
let x_turns = true;
let winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let x_score = 0;
let circle_score = 0;

startGame();

function startGame(){
    cells.forEach(cell => {
        cell.addEventListener('click', click_func, {once: true})
    });
}

function click_func(e){
   determiningWhosTurnItis(e);

    if(winner(x_class)){
        x_score++;
        setTimeout(clearGame, 150);
        x_total_score.innerHTML = x_score;
    } else if(winner(circle_class)){
        circle_score++;
        setTimeout(clearGame, 150);
        circle_total_score.innerHTML = circle_score;
    } else if(draw()){
        setTimeout(clearGame, 150);
        console.log('draw');
    }

}

function determiningWhosTurnItis(e){
    if(x_turns){
        e.target.classList.add(x_class);
        turn.innerHTML = `O's`;
    } else{
        e.target.classList.add(circle_class);
        turn.innerHTML = `X's`;
    }
    x_turns = !x_turns;
}

function winner(class_name){
    return winningCombinations.some(combinations => {
        return combinations.every(index => {
            return board.children[index].classList.contains(class_name);
        })
    })
}

function clearGame(){
    [...cells].map(tiles => {
        tiles.classList.remove(x_class);
        tiles.classList.remove(circle_class);
    });
    startGame();
    x_turns = true;
    turn.innerHTML = `X's`;
}

function draw(){
    return [...cells].every(cell => {
        return cell.classList.contains(x_class) || cell.classList.contains(circle_class)
    })
}
