let check=document.querySelector("#shot");
let checker=document.querySelectorAll(".circle");
let inputs=document.querySelectorAll("input");
let increasing=document.querySelector(".increasing");
let message=document.querySelector(".hide");
let span=document.getElementById("count");
let update=document.getElementById("para1")
const alldata= JSON.parse(localStorage.getItem("alldata"))||{};
let increasing1=Object.values(alldata).filter((goal)=>goal.completed).length;
increasing.style.width=`${increasing1/3*100}%`
increasing.style.backgroundColor="green";
span.innerText=`${increasing1}/3 completed`;
let array=[
    "Raise the bar when you complete the goals",
    "One goal is completed",
    "Second goal  is completd",
    " Congratulations all goalscompleted  ❤✔ "
]
update.innerText=array[increasing1]


checker.forEach((check1)=>{

    
    
check1.addEventListener("click",()=>{
    const allfields1=[...inputs].every(function (input){
        return input.value
    })
    if(allfields1){
        check1.parentElement.classList.toggle("Completed");
       
        const inputid=check1.nextElementSibling.id
        alldata[inputid].completed= ! alldata[inputid].completed;
         increasing1=Object.values(alldata).filter((goal)=>goal.completed).length;
        increasing.style.width=`${increasing1/3*100}%`
        increasing.style.backgroundColor="green";
        span.innerText=`${increasing1}/3 completed`;
        update.innerText=array[increasing1]
        localStorage.setItem("alldata",JSON.stringify(alldata))
      
    
       
 
        
    }
    else{
        message.classList.remove("hide");
        message.style.color="red"

    }
})})
inputs.forEach((input)=>{
    input.value=alldata[input.id].name;
    if(alldata[input.id].completed){
    input.parentElement.classList.add("Completed");

    
    }
    input.addEventListener("focus",()=>{
        message.classList.add("hide");
     
    })

    input.addEventListener("input",()=>{
        
        alldata[input.id]={
            name:input.value,
            completed:false
        }
        localStorage.setItem("alldata",JSON.stringify(alldata))
    
    })
})


   
