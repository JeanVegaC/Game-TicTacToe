"use strick"
const d = document;

const $cells = d.querySelectorAll('.cell');
const $x =`<svg class="figure" value="x" version="1.1" xmlns="http://www.w3.org/2000/svg" width="73" height="73" viewBox="0 0 130 130"><line x1="10" y1="10" x2="120" y2="120" stroke-width="10" stroke="#607EAA" stroke-linecap="round"/><line x1="10" y1="120" x2="120" y2="10" stroke-width="10" stroke="#607EAA" stroke-linecap="round"/></svg>`,
$o = `<svg value="o" height="75" width="75"><circle cx="38" cy="38" r="34.5" stroke="#D61C4E" stroke-width="4.9" fill="transparent"/></svg>`;

const figure = [$x,$o];
let turn = 0,
scoreX = 0,
scoreO = 0;


console.log('TicTacToe game working..!')

const check = (e,i)=>{
    e.innerHTML = figure[turn];
    turn++;
    if(turn == 2) turn = 0;

    changeTurn(turn,figure[turn]);
    verify(i,e);
}

let cont = 0;

const changeTurn = (i,e)=>{
    const nowTurn = d.querySelector('.turn').querySelector('span');
    (i == 0)
    ?nowTurn.innerHTML = `<svg class="figure" value="x" version="1.1" xmlns="http://www.w3.org/2000/svg" width="25" height="22" viewBox="0 0 130 130"><line x1="10" y1="10" x2="120" y2="120" stroke-width="10" stroke="#607EAA" stroke-linecap="round"/><line x1="10" y1="120" x2="120" y2="10" stroke-width="10" stroke="#607EAA" stroke-linecap="round"/></svg>`
    :nowTurn.innerHTML = `<svg value="o" height="25" width="25"><circle cx="12" cy="12" r="8.5" stroke="#D61C4E" stroke-width="2.9" fill="transparent"/></svg>`
    
}

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

    if(cont>=9){
        const overlayWinner = d.querySelector('.winner');
        overlayWinner.classList.add('show');
        winner = d.getElementById('winner');    
        overlayWinner.querySelector('img').src = 'https://i.pinimg.com/originals/50/d3/fe/50d3fe7437683844ba91130b8200b02c.png';
        winner.innerHTML = `Tied Game!!`;
        
    }
}

const showWinner = (e)=>{
    const overlayWinner = d.querySelector('.winner').classList.add('show'),
    winner = d.getElementById('winner');
    let color;
    (e == 'x')
    ?color = '#607EAA':color = '#D61C4E';
    winner.innerHTML = `The <b style="color:${color};">${e}</b> is the winner!!`;
    score(e)
}

let play = ()=>{
    console.log('The game is running!!!');

    const nowTurn = d.querySelector('.turn').classList.add('showTurn');
    changeTurn(turn,figure[turn]);
    $cells.forEach((e,i)=>{
        e.addEventListener('click',(e)=>{
            (e.target.matches(".cell")&&e.target.children.length == 0)
            ?check(e.target,i)
            :'';    
        });
    }); 
}

const score = (e)=>{
const score = d.querySelector(`.marker-${e}`).querySelector('span').innerHTML = (e == 'x')?scoreX = scoreX+1:scoreO = scoreO+1;
}

const btnPlay = d.querySelector('.btnPlay');

btnPlay.addEventListener('click',()=>{
    play();
    btnPlay.innerHTML = 'Restart';
    play = ()=>{
        const overlayWinner = d.querySelector('.winner').classList.remove('show'),
        winner = d.getElementById('winner'),
        cells = d.querySelectorAll('.cell');    
        winner.innerHTML = ``;

        cells.forEach( e =>{
            while(e.firstChild){
                e.removeChild(e.firstChild);
            }
        })
        cont = 0;
        turn = 0;
        changeTurn(turn,figure[turn]);

    }
});
