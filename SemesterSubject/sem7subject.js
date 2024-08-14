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

document.querySelector(".ML").addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/semester7subject/sem7ml.html";
})

document.querySelector(".BDA").addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/semester7subject/sem7bda.html";
})
document.querySelector(".NLP").addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/semester7subject/sem7nlp.html";
})
document.querySelector(".BC").addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/semester7subject/sem7bc.html";
})
document.querySelector(".CSL").addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/semester7subject/sem7csl.html";
})
document.querySelector(".IR").addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/semester7subject/sem7ir..html";
})