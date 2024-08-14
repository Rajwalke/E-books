const list=document.querySelector('.listsignjs');
const option=document.querySelector('.allmenuholder');
list.addEventListener('click',()=>{
    option.classList.toggle('active');

})
document.querySelector(".back-arrow").addEventListener("click",()=>{
    document.querySelector(".back-arrowp1").innerHTML=`<i class="fa-solid fa-spinner fa-spin"></i>`;
    setTimeout(()=>{
        window.location.href="http://127.0.0.1:5500/SemesterSubject/sem8sub.html";
    },2000);
   
})
// semester 1 subject
document.querySelector(".Mathematics").addEventListener('click',()=>{
    window.location.href = 'http://127.0.0.1:5500/textbookandPYQ/textbookPYQsem1.html'; 
})

document.querySelector(".Physics").addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/textbookandPYQ/sem1physdics.html";
})
document.querySelector(".Chemistry").addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/textbookandPYQ/sem1Chemistry.html";
})
document.querySelector(".Mechanics").addEventListener("click",()=>{
    window.location.href="http://127.0.0.1:5500/textbookandPYQ/sem1mechanics.html";
})
document.querySelector(".Electical").addEventListener("click",()=>{
    window.location.href="http://127.0.0.1:5500/textbookandPYQ/sem1mechanics.html";
})
document.querySelector(".EVS").addEventListener("click",()=>{
    window.location.href="http://127.0.0.1:5500/textbookandPYQ/sem1evs.html";
})


