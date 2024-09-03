document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const rating = document.getElementById('rating').value;
    const comments = document.getElementById('comments').value;

    // You can add further processing here, like sending data to a server
    // For demonstration, we'll just show a success message

    const successMessage = document.getElementById('successMessage');
    successMessage.textContent = `Thank you, ${name}! Your feedback has been submitted successfully.`;
    successMessage.style.display = 'block';

    // Clear the form
    document.getElementById('feedbackForm').reset();
});
document.querySelector(".back-arrow").addEventListener("click",()=>{
    document.querySelector(".back-arrowp1").innerHTML=`<i class="fa-solid fa-spinner fa-spin"></i>`;
    setTimeout(()=>{
    },3000);
   
})