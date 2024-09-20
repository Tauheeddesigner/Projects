let allinput=document.querySelectorAll("input");
let allcircle=document.querySelectorAll(".circle");
let error=document.querySelector(".error");
let button=document.querySelector(".submitt");
let bar=document.querySelector(".increasing");
let span=document.querySelector(".check")
let message=document.getElementById("message");
let alluserdata=JSON.parse(localStorage.getItem("formdata"))||{}
let increment=Object.values(alluserdata).filter((goal)=> goal.completed).length

console.log(increment)
let array=[
    "Raise the bar when you complete the input",
    "You put one information",
    "You put second information",
    "Congratulations "
]
  bar.style.width=`${increment/3*100}%`
         bar.style.backgroundColor="red"
bar.firstElementChild.innerHTML=`${increment}/3completed`
message.innerHTML=array[increment];
// console.log(increment);

allcircle.forEach((chcek)=>{
    chcek.addEventListener("click",()=>{
    const allfields1=[...allinput].every(function(input){
        return input.value;
    })
    if(allfields1){
        chcek.parentElement.classList.toggle("Completed")
        const getid=chcek.nextElementSibling.id;
         alluserdata[getid].completed= !alluserdata[getid].completed
        localStorage.setItem("formdata",JSON.stringify(alluserdata))
         increment=Object.values(alluserdata).filter((goal)=> goal.completed).length
         span.innerHTML=`${increment}/3 completed`
         message.innerHTML=array[increment];
         bar.style.width=`${increment/3*100}%`
         bar.style.backgroundColor="red"
       
    }
    else{
        error.classList.remove("error")
        error.style.color="red"
    }
    })
})
allinput.forEach((check)=>{
    check.value=alluserdata[check.id].name
    if(alluserdata[check.id].completed){
        check.parentElement.classList.add("Completed");
    }
    check.addEventListener("focus",()=>{
        error.classList.add("error")

    })
    check.addEventListener("input",()=>{
      alluserdata[check.id]={
        name:check.value,
        completed:false
      }
        localStorage.setItem("formdata",JSON.stringify(alluserdata));

    })

})

// let allinputdata1= JSON.parse(localStorage.getItem("user data1"))||{}
// let increment=Object.values(allinputdata1).filter((goal)=> goal.completed).length
// // span.innerHTML=`${increment}/3 completed`;


// allcircle.forEach((check)=>{
//     check.addEventListener("click",()=>{
//        const allfields=[...allinput].every(function(input){
//         return input.value
//        })
//        if(allfields){
//         check.parentElement.classList.toggle("Completed");
//         const getid=check.nextElementSibling.id;
//         allinputdata1[getid].completed= !allinputdata1[getid].completed
//         increment=Object.values(allinputdata1).filter((goal)=>goal.completed).length
//         // bar.style.width=`${increment/3*100}%`;
//         // span.innerHTML=`${increment}/3 completed`;
        



//         localStorage.setItem("user data1",JSON.stringify(allinputdata1));
        
//        }
//        else{
//         error.classList.remove("error")
        
//         error.style.color="red"
//        }
//     })
// })
// allinput.forEach((input1)=>{
//     input1.value=allinputdata1[input1.id].name;
//     if(allinputdata1[input1.id].completed){
//         input1.parentElement.classList.add("Completed")
//     }

//     input1.addEventListener("focus",()=>{
//         error.classList.add("error")
    
    

//     })
//     input1.addEventListener("input",()=>{
//         allinputdata1[input1.id]={
//             name:input1.value,
//             completed:false
//         }
//         localStorage.setItem("user data",JSON.stringify(allinputdata1))
//     })
// })
