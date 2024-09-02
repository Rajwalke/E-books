const stars = document.querySelectorAll('.star');
const ratingValue = document.getElementById('rating-value');
const submitButton = document.getElementById('submit-rating');

let rating = 0;

stars.forEach(star => {
    star.addEventListener('click', () => {
        rating = star.getAttribute('data-value');
        ratingValue.textContent = `Rate: ${rating}`;
        
        stars.forEach(s => s.classList.remove('active'));
        star.classList.add('active');
        for (let i = 0; i < rating; i++) {
            stars[i].classList.add('active');
        }
    });
});

submitButton.addEventListener('click', () => {
    if (rating > 0) {
        alert(`Thank you for rating our app ${rating} stars!`);
        // Add logic to submit the rating to the server or save it locally
    } else {
        alert('Please select a rating before submitting.');
    }
    stars.forEach(s => s.classList.remove('active'));
});

document.querySelector(".back-arrow").addEventListener("click",()=>{
    document.querySelector(".back-arrowp1").innerHTML=`<i class="fa-solid fa-spinner fa-spin"></i>`;
    setTimeout(()=>{
        // window.location.href="http://127.0.0.1:5500/SemesterSubject/sem3sub.html";
    },3000);
   
})