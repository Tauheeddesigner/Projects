var fullimgbox=document.getElementById("fullimgbox")
var openimg=document.querySelectorAll(".imgkhb img")
var full=document.getElementById("full");
let cross=document.querySelector("span")
openimg.forEach((img)=>{
    img.addEventListener("click",()=>{
        console.log(img.src);
        showimg(img.src)
        
        
        
        
  });
 })
const showimg=(pic)=>{
    fullimgbox.style.display="flex";
    full.src=pic;
    
    

}
cross.addEventListener("click",()=>{
    fullimgbox.style.display="none";
})
