
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact_form");
    const confirmationMessage = document.getElementById("confirmation_message");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Add any additional validation or processing here if needed

        // Send the form data to Formspree using Fetch API
        fetch("https://formspree.io/f/xrgnekdz", {
            method: "POST",
            body: new FormData(contactForm),
            headers: {
                Accept: "application/json",
            },
        })
            .then(response => response.json())
            .then(data => {
                // Hide the form and show the confirmation message
                contactForm.reset();
                confirmationMessage.style.display = "block";
                setTimeout(function() {
                    confirmationMessage.style.display = "none";
                }, 5000);
            })
            .catch(error => console.error("Error:", error));
    });
});
