const body=document.body;
const theme=document.querySelector(".theme");
theme.addEventListener("click",()=>{
    body.style.background="black";
    body.style.color="white";
})

const login=document.querySelector(".login");
login.addEventListener("click",()=>{
    const urlToOpen="login.html";
    window.open(urlToOpen,"_blank")
})

const customize=document.querySelector(".customize");
customize.addEventListener("click",()=>{
    alert("Currently under maintainance")
})