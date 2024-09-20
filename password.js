let sinput=document.getElementById("sinput");
let span=document.getElementById("span");
let finput=document.getElementById("finput")
let lowercase=document.getElementById("lowercase")
let uppercase=document.getElementById("Uppercase")
let Numbers=document.getElementById("Numbers")
let Symbols=document.getElementById("Symbols")
let gen=document.getElementById("gbtn")
let copy=document.querySelector("i")
span.innerHTML=sinput.value;
sinput.addEventListener("input",()=>{
    span.innerHTML=sinput.value;

})
gen.addEventListener("click",()=>{
    finput.value=gbtn()
})
let lowercasel="abcdefghijklmnopqrstuvwxyz"
let uppercaseL='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let Numbersn="12345678910"
let Symbolsm="@!$%^&*"
function gbtn(){
    let password=''
    let allchar=''
    allchar+=lowercase.checked ? lowercasel :""
    allchar+=uppercase.checked ? uppercaseL:""
    allchar+=Numbers.checked ? Numbersn:""
    allchar+=Symbols.checked ? Symbolsm:""
    if(allchar=="" || allchar.length==0){
        return password
    }
   
    let i=1
    while (i<=sinput.value) {
        password+=allchar.charAt(Math.floor(Math.random()*allchar.length))
        i++

        
    }
  
   
   return password
}
copy.addEventListener("click",()=>{
    if(finput.value!=""){
        navigator.clipboard.writeText(finput.value);
       
        copy.title="Copy"
    }
    
})
