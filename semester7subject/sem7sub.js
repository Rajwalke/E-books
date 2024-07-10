document.querySelector(".back-arrow").addEventListener("click",()=>{
    document.querySelector(".back-arrowp1").innerHTML=`<i class="fa-solid fa-spinner fa-spin"></i>`;
    setTimeout(()=>{
        window.location.href="http://127.0.0.1:5500/SemesterSubject/sem7sub.html";
    },2000);
   
})

   