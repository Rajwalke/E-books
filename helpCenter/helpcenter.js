// FAQ Toggle Functionality
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        const toggle = button.querySelector('.faq-toggle');
        const isVisible = answer.style.display === 'block';

        // Hide all answers and reset toggles
        document.querySelectorAll('.faq-answer').forEach(answer => answer.style.display = 'none');
        document.querySelectorAll('.faq-toggle').forEach(toggle => toggle.textContent = '+');

        // Show the clicked answer and change the toggle to '-'
        if (!isVisible) {
            answer.style.display = 'block';
            toggle.textContent = '-';
        }
    });
});

// Basic Form Handling (Example - modify to suit your needs)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you shortly.');
    this.reset();
});

document.querySelector(".back-arrow").addEventListener("click",()=>{
    document.querySelector(".back-arrowp1").innerHTML=`<i class="fa-solid fa-spinner fa-spin"></i>`;
    setTimeout(()=>{
        // window.location.href="http://127.0.0.1:5500/SemesterSubject/sem3sub.html";
    },3000);
   
})