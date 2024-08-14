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

document.querySelector(".Mathematics4").addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/semester4subject/sem4maths4.html";
})
document.querySelector(".AOA").addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/semester4subject/sem4AOA.html";
})
document.querySelector(".DBMS").addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/semester4subject/sem4dbms.html";
})
document.querySelector(".OS").addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/semester4subject/sem4os.html";
})
document.querySelector(".MP").addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/semester4subject/sem4mp.html";
})
document.querySelector(".Python").addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/semester4subject/sem4python.html";
})