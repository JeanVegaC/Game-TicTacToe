"use strick"
const d = document;

const $cells = d.querySelectorAll('.cell');
const $x =`<svg class="figure" value="x" version="1.1" xmlns="http://www.w3.org/2000/svg" width="73" height="73" viewBox="0 0 130 130"><line x1="10" y1="10" x2="120" y2="120" stroke-width="10" stroke="#607EAA" stroke-linecap="round"/><line x1="10" y1="120" x2="120" y2="10" stroke-width="10" stroke="#607EAA" stroke-linecap="round"/></svg>`,
$o = `<svg value="o" height="75" width="75"><circle cx="38" cy="38" r="34.5" stroke="#D61C4E" stroke-width="4.9" fill="transparent"/></svg>`;

const figure = [$x,$o];
let turn = 0;

console.log('TicTacToe game working..!')

const check = (e,i)=>{
    e.innerHTML = figure[turn];
    turn++;
    if(turn == 2) turn = 0;

    verify(i,e);
}

let cont = 0;

const verify = (i,e)=>{
    cont ++;
    //HORIZONTALS
    if(i == 0 || i == 1 || i == 2){
        if($cells[0].innerHTML == $cells[1].innerHTML && $cells[0].innerHTML == $cells[2].innerHTML) return showWinner(e.firstChild.getAttribute('value'));     
    }

    if(i == 3 || i == 4 || i == 5){
        if($cells[3].innerHTML == $cells[4].innerHTML && $cells[3].innerHTML == $cells[5].innerHTML) return showWinner(e.firstChild.getAttribute('value'));    
    }

    if(i == 6 || i == 7 || i == 8){
        if($cells[6].innerHTML == $cells[7].innerHTML && $cells[6].innerHTML == $cells[8].innerHTML) return showWinner(e.firstChild.getAttribute('value'));    
    }

    //VERTICALS
    if(i == 0 || i == 3 || i == 6){
        if($cells[0].innerHTML == $cells[3].innerHTML && $cells[0].innerHTML == $cells[6].innerHTML) return showWinner(e.firstChild.getAttribute('value'));    
    }

    if(i == 1 || i == 4 || i == 7){
        if($cells[1].innerHTML == $cells[4].innerHTML && $cells[1].innerHTML == $cells[7].innerHTML) return showWinner(e.firstChild.getAttribute('value'));    
    }

    if(i == 2 || i == 5 || i == 8){
        if($cells[2].innerHTML == $cells[5].innerHTML && $cells[2].innerHTML == $cells[8].innerHTML) return showWinner(e.firstChild.getAttribute('value'));    
    }

    //DIAGONALS
    if(i == 0 || i == 4 || i == 8){
        if($cells[0].innerHTML == $cells[4].innerHTML && $cells[0].innerHTML == $cells[8].innerHTML) return showWinner(e.firstChild.getAttribute('value'));    
    }

    if(i == 2 || i == 4 || i == 6){
        if($cells[2].innerHTML == $cells[4].innerHTML && $cells[2].innerHTML == $cells[6].innerHTML) return showWinner(e.firstChild.getAttribute('value'));    
    }

    (cont>=9)?console.log('DRAW GAME NUUUUBS !!!'):' ';
}

const showWinner = (e)=>{
    const overlayWinner = d.querySelector('.overlayWinner').classList.add('show');
    if(e == 'x') return console.log('The X is the winner!!');
    if(e == 'o') return console.log('The O is the winner!!');
}

let play = ()=>{
    console.log('The game is running!!!');

    $cells.forEach((e,i)=>{
        e.addEventListener('click',(e)=>{
            (e.target.matches(".cell")&&e.target.children.length == 0)
            ?check(e.target,i)
            :'';    
        });
    }); 
}

const btnPlay = d.querySelector('.btnPlay');

btnPlay.addEventListener('click',()=>{
    play();
    btnPlay.innerHTML = 'Restart';
    play = ()=>{
        location.reload();

    }
});