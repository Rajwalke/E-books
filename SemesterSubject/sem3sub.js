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
// document.querySelector(".Mathematics3").addEventListener('click',()=>{
//     window.location.href="http://127.0.0.1:5500/semester3subject/sem3maths3.html";
// });


// document.querySelector(".DSGT").addEventListener('click',()=>{
//     window.location.href="http://127.0.0.1:5500/semester3subject/sem3dsagt.html";
// })

// document.querySelector(".DSA").addEventListener('click',()=>{
//     window.location.href="http://127.0.0.1:5500/semester3subject/sem3dsa.html";
// })
// document.querySelector(".DLCA").addEventListener('click',()=>{
//     window.location.href="http://127.0.0.1:5500/semester3subject/sem3dlca.html";
// })
// document.querySelector(".CG").addEventListener('click',()=>{
//     window.location.href="http://127.0.0.1:5500/semester3subject/sem3cg.html";
// })
// document.querySelector(".Java").addEventListener('click',()=>{
//     window.location.href="http://127.0.0.1:5500/semester3subject/sem3java.html";
// })
