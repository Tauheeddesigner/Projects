let string=""
let input=document.querySelector("input")
let button=document.querySelectorAll("button")
button.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML=="="){
            string=eval(string)
            input.value=string
        }
        else if(e.target.innerHTML=="c"){
            string="0"
            input.value=string
            
            
        }
        else{
            string=string+e.target.innerHTML
            input.value=string
            
        }
     
    })
})