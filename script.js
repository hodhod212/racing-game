const speedDash = document.querySelector('.speedDash');
const scoreDash = document.querySelector('.scoreDash');
const lifeDash = document.querySelector('.lifeDash');
const container = document.getElementById('contaimer');
const btnStart = document.querySelector('.btnStart');
const animationGame = requestAnimationFrame(playGame);
btnStart.addEventListener('click',startGame);
document.addEventListener('keydown',pressKeyOn);
document.addEventListener('keyup',pressKeyOff);
// Game variables
let gamePlay = false;
let keys = {
    ArrowUp:false,
    ArrowDown:false,
    ArrowLeft:false,
    ArrowRight:false
}
function startGame(){
    console.log(gamePlay);
    var div = document.createElement('div');
    div.setAttribute('class','playerCar');
    div.x = 250;
    div.y = 500;
    container.appendChild(div);
    gamePlay = true;   
}
function pressKeyOn(){
    
}
function playGame(){
    if(gamePlay){
        console.log('Game in play');  
    }
    animationGame = requestAnimationFrame(playGame);
}