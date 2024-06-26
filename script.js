console.log("Welcome to Tic Tac Toe")

let music = new Audio("music.mp3")
let applause = new Audio("clapping.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isGameOver = false
let isMusic = false
let count=0

//Function to change turn
const changeTurn =()=>{
    return turn === "X"?  "0": "X"
}

//Function to check for a win
const checkWin = () =>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e=>{
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = "Player " + boxtext[e[0]].innerText + " Won";
            isGameOver = true
            applause.play()
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
        }
    })

}

//Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext= element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isGameOver){
                count=count+1;
                if (count == 9) {
                    document.querySelector('.info').innerText = "Match Drawn";
                }
                else{
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;}
            }
        }
    })
}) 



reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText=""
    })
    turn = "X";
    isGameOver=false
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})


btn.addEventListener('click',()=>{
    if(!isMusic){
        music.play();
        btn.innerText = "Stop Music"
        isMusic=true
    }
    else{
            music.pause();
        btn.innerText = "Play Music"
            isMusic = false
        }
})




// function GameReset(){
//     for(let i=0;i<9;i++){
//         document.getElementsByClassName("boxtext")[i].innerText = ""
        
//     }
//    document.getElementById('img1').style.display="none"
// }