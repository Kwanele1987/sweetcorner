// Wait until page loads
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("enquiryForm");

    form.addEventListener("submit", function (event) {

        // Get values
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let service = document.getElementById("service").value;
        let message = document.getElementById("message").value.trim();

        // Check empty fields
        if (name === "" || email === "" || service === "" || message === "") {
            alert("Please fill in all required fields.");
            event.preventDefault();
            return;
        }

        // Email validation (simple)
        if (!email.includes("@") || !email.includes(".")) {
            alert("Please enter a valid email address.");
            event.preventDefault();
            return;
        }

        // Success
        alert("Enquiry submitted successfully!");
    });

});