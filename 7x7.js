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

let gameOver=false
const changeTurn=()=>{
    return turn=="X"?"O":"X"
 }

function checkWin(){
    let boxtext=document.getElementsByClassName('boxtext')
    let win=[
         [0,1,2,3],
         [1,2,3,4],
         [2,3,4,5],
         [3,4,5,6],

         [7,8,9,10],
         [8,9,10,11],
         [9,10,11,12],
         [10,11,12,13],

         [14,15,16,17],
         [15,16,17,18],
         [16,17,18,19],
         [17,18,19,20],

         [21,22,23,24],
         [22,23,24,25],
         [23,24,25,26],
         [24,25,26,27],

         [28,29,30,31],
         [29,30,31,32],
         [30,31,32,33],
         [31,32,33,34],
         
         [35,36,37,38],
         [36,37,38,39],
         [37,38,39,40],
         [38,39,40,41],

         [42,43,44,45],
         [43,44,45,46],
         [44,45,46,47],
         [45,46,47,48],

         [0,7,14,21],
         [7,14,21,28],
         [14,21,28,35],
         [21,28,35,42],

         [1,8,15,22],
         [8,15,22,29],
         [15,22,29,36],
         [22,29,35,43],

         [2,9,16,23],
         [9,16,23,30],
         [16,23,30,37],
         [23,30,37,44],

         [3,10,17,24],
         [10,17,24,31],
         [17,24,31,38],
         [24,31,38,45],

         [4,11,18,25],
         [11,18,25,32],
         [18,25,32,29],
         [25,32,29,46],

         [5,12,19,26],
         [12,19,26,33],
         [19,26,33,40],
         [26,33,40,47],

         [6,13,20,27],
         [13,20,27,34],
         [20,27,34,41],
         [27,34,41,48],

         [0,8,16,24],
         [8,16,24,32],
         [16,24,32,40],
         [24,32,40,48],

         [6,12,18,24],
         [12,18,24,30],
         [18,24,30,36],
         [24,30,36,42],
         
    ]
    win.forEach(e=>{
      if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[3]].innerText === boxtext[e[2]].innerText) && boxtext[e[0]].innerText !==""){
        document.getElementById('dis').innerText = boxtext[e[0]].innerText + " Won"
        gameOver=true
      }
    })
}

let boxes=document.getElementsByClassName("line1")
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext')
    element.addEventListener('click',()=>{
    if(gameOver==false){
       if(boxtext.innerText===''){
          console.log("1")
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

