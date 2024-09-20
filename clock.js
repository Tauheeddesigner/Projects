let check=document.querySelectorAll(".checkcricle");
let goal=document.querySelector(".allgoals")
let error=document.getElementById("goals")
let raising=document.getElementById("para")
let inputfields=document.querySelectorAll("input");
let progrssbar=document.querySelector(".progressbar")
let valuire=document.querySelector(".progressvalue")
let end=document.querySelector(".quote")
let g=0;
const commentcount=[
    "Raise the bar by completing your goals",
    "Well begin is half done",
    "just a step away,keep going",
    "You just completed all the goals",
]
const ghjk=[
    "Move one step ahead ,today",
    "One step is completed",
    "Second step is completed",
    "third step is completed",
]

const allgoals=JSON.parse(localStorage.getItem("allgoals"))||{}
let goalcount=Object.values(allgoals).filter((goal)=> goal.completed).length
valuire.style.width=`${goalcount/3*100}%`
valuire.style.backgroundColor="red"
valuire.firstElementChild.innerHTML=`${goalcount}/3 completed`
raising.innerText=commentcount[goalcount]
end.innerHTML=ghjk[goalcount]





check.forEach((checkbox)=>{
    checkbox.addEventListener("click",(e)=>{
        
    const allfields=[...inputfields].every(function (input){
        return input.value;
    })
    if(allfields){
        checkbox.parentElement.classList.toggle("Completed")
        error.classList.add("hide");
       
        const inputid=checkbox.nextElementSibling.id
        allgoals[inputid].completed=!allgoals[inputid].completed
        goalcount=Object.values(allgoals).filter((goal)=> goal.completed).length
        valuire.style.width=`${goalcount/3*100}%`
        valuire.style.backgroundColor="red"
        valuire.firstElementChild.innerHTML=`${goalcount}/3 completed`
        localStorage.setItem("allgoals",JSON.stringify(allgoals))
        raising.innerText=commentcount[goalcount]
        end.innerHTML=ghjk[goalcount]
     

       
    }
    else{
        error.classList.remove("hide");
        
        checkbox.parentElement.classList.remove("Completed")
    }
    
   
        
        
    
        
       
        
    })
})
inputfields.forEach((input)=>{
    
    input.value=allgoals[input.id].name
    if(allgoals[input.id].completed){
        input.parentElement.classList.add("Completed")
    }

    input.addEventListener("focus",()=>{
        error.classList.add("hide");
    })
        input.addEventListener("input",(e)=>{
            allgoals[input.id]={
                name:input.value,
                completed:false
            }
            localStorage.setItem("allgoals",JSON.stringify(allgoals))
       

    })
})
