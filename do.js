let input=document.querySelector("input");
let todo=document.querySelector("ul");

input.addEventListener("keyup",
    function(event){
        if(event.key=="Enter"){
            createnewlist(this.value);
            this.value="";
        }
    }
)
const createnewlist=(items)=>{
    let newlist=document.createElement("li");
    newlist.innerHTML=`
    ${items}
    <i class="fas fa-times"></i>
    `;
    newlist.addEventListener("click",()=>{
        newlist.classList.toggle("done");
    })
    newlist.querySelector("i").addEventListener("click",()=>{
        newlist.remove();
    })
  todo.appendChild(newlist);
}