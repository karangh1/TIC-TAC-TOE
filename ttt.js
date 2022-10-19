console.log("hi")
let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
let turn=""

btn1.addEventListener('click',()=>{
   turn=btn1.value
   document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn
},{once:true})

btn2.addEventListener('click',()=>{
   turn=btn2.value
   document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn
},{once:true})

console.log(turn)
let gameOver=false
const changeTurn=()=>{
    return turn=="X"?"O":"X"
 }

function checkWin(){
    let boxtext=document.getElementsByClassName('boxtext')
    let win=[
         [0,1,2,3,4],
         [5,6,7,8,9],
         [10,11,12,13,14],
         [15,16,17,18,19],
         [20,21,22,23,24],
         [1,6,11,16,21],
         [2,7,12,17,22],
         [3,8,13,18,23],
         [4,9,14,19,24],
         [0,5,10,15,20],
         [0,6,12,18,24],
         [4,8,12,16,20],
    ]
    win.forEach(e=>{
      if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[3]].innerText === boxtext[e[2]].innerText) && (boxtext[e[3]].innerText === boxtext[e[4]].innerText) && boxtext[e[0]].innerText !==""){
        document.getElementById('dis').innerText = boxtext[e[0]].innerText + " Won"
        //document.getElementsByClassName("info").innerText = boxtext[e[0]].innerText + " Won"
        gameOver=true
      }
    })
}

let boxes=document.getElementsByClassName("line")
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext')
    element.addEventListener('click',()=>{
      if(gameOver==false){
      if(boxtext.innerText===''){
          boxtext.innerText=turn
          turn=changeTurn()
          checkWin()
          document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn
           
       }
      }
      else
      document.getElementById('dis').innerText = "Game is already over."
        
    })
})
const reset=document.getElementsByClassName("reset")
reset[0].addEventListener('click',()=>{
   let boxtext=document.querySelectorAll('.boxtext')
   Array.from(boxtext).forEach(element => {
      element.innerText=''
   })
   document.getElementById('dis').innerText =''
   location.reload()
})

