
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


window.addEventListener('scroll', function() {
    // var header = document.querySelector('.main_header');
    var header_logo_container = document.querySelector('.header_logo_container');
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
    if (window.innerWidth < 500) { // Check screen width
      if (scrollPosition > 0) { // If scrolled down
        // header.classList.add('fixed_nav');
        header_logo_container.classList.add('logo_hidden');
        console.log("scrolled");
      } else { // If at the top
        // header.classList.remove('fixed_nav');
        header_logo_container.classList.remove('logo_hidden');
      }
    } else { // If screen width is greater than or equal to 500px
    //   header.classList.remove('fixed_nav');
      header_logo_container.classList.remove('logo_hidden');
    }
  });