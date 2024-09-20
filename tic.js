let button=document.querySelectorAll(" .row button")
let reset=document.querySelector(".reset")
let newbtn=document.querySelector(".new")
let winner=document.querySelector("h2")
let check=true
let winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]
button.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(check){
            btn.innerText="X"
            check=false
        }
        else{
            btn.innerText="Y"
            check=true
        }
        btn.disabled=true
        checkwin()
    })
})
function checkwin(){
    for(pattern of winpattern){
        console.log(button[pattern[0]].innerText,button[pattern[1].innerText],button[pattern[2].innerText])
        let pos1=button[pattern[0]].innerText
        let pos2=button[pattern[1]].innerText
        let pos3=button[pattern[2]].innerText
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                showwin(pos1)}
        }
        
       
}
}
function showwin(win){
    winner.innerText=`Winner is ,${win}`
   
   winner.classList.remove("hide")
    
}
function start(){
    check=true
    for(let btn of button){
        btn.innerText=""
        

    }
    disabled()
    winner.classList.add("hide")
}
function disabled(){
    for(let box of button){
        box.disabled=false
    }
}
newbtn.addEventListener("click",()=>{
    start()
})
reset.addEventListener("click",()=>{
    start()
})