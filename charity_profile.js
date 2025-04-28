document.addEventListener('DOMContentLoaded', function () {
    const volunteerButton = document.getElementById("volunteerBtn");
    const formContainer = document.getElementById("formContainer");

    volunteerButton.addEventListener("click", function () {
        if (formContainer.style.display === "none" || formContainer.style.display === "") {
            formContainer.style.display = "block";  // Show form
            formContainer.innerHTML = `
                <h3>Sign Up to Volunteer</h3>
                <form action="#" method="POST">
                    <label for="name">Your Name:</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" required><br><br>
                    <label for="email">Your Email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required><br><br>
                    <label for="message">Why do you want to volunteer?</label><br>
                    <textarea id="message" name="message" placeholder="Your message..." required></textarea><br><br>
                    <button type="submit">Submit</button>
                </form>
            `;
        } else {
            formContainer.style.display = "none";  // Hide form
        }
    });
});
