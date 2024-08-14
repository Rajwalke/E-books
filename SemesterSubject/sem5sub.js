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

document.querySelector(".TCS").addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/semester5subject/sem5tcs.html";
})

document.querySelector(".SE").addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/semester5subject/sem5se.html";
})

document.querySelector(".CN").addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/semester5subject/sem5cn.html";
})

document.querySelector(".DWM").addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/semester5subject/sem5dwm.html";
})

document.querySelector(".IP").addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/semester5subject/sem5ip.html";
})

document.querySelector(".ADBMS").addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/semester5subject/sem5adbms.html";
})