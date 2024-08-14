const list=document.querySelector('.listsignjs');
const option=document.querySelector('.allmenuholder');
list.addEventListener('click',()=>{
    option.classList.toggle('active');

})
document.querySelector(".back-arrow").addEventListener("click",()=>{
    document.querySelector(".back-arrowp1").innerHTML=`<i class="fa-solid fa-spinner fa-spin"></i>`;
    setTimeout(()=>{
       
    },2000);
   
})
document.querySelector(".SPCC").addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/semester6subjects/sem6spcc.html";
})
document.querySelector(".CSS").addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/semester6subjects/sem6css.html";
})
document.querySelector(".MP").addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/semester6subjects/sem6mc.html";
})
document.querySelector(".AI").addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/semester6subjects/sem6ai.html";
})
document.querySelector(".IOT").addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/semester6subjects/sem6iot.html";
})
document.querySelector(".QA").addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/semester6subjects/sem6qa.html";
})
