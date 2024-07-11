const list=document.querySelector('.listsignjs');
const option=document.querySelector('.allmenuholder');
list.addEventListener('click',()=>{
    option.classList.toggle('active');

})

document.querySelector(".HMI").addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/semester8subject/sem8HMI.html";
})
document.querySelector(".DC").addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/semester8subject/sem8DC.html";
})
document.querySelector(".DL").addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/semester8subject/sem8DL.html";
})
document.querySelector(".ADS").addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/semester8subject/sem8ADS.html";
})
document.querySelector(".SMA").addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/semester8subject/sem8SMA.html";
})
document.querySelector(".PM").addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/semester8subject/sem8PM.html";
})