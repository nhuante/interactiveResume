
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
    var header_logo_container = document.querySelector('.header_logo_text');
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
    if (window.innerWidth < 500) { // Check screen width
      if (scrollPosition > 0) { // If scrolled down
        header_logo_container.classList.add('logo_hidden');
      } else { // If at the top
        header_logo_container.classList.remove('logo_hidden');
      }
    } else { // If screen width is greater than or equal to 500px
      header_logo_container.classList.remove('logo_hidden');
    }
  });

const PHOTOS = [
    "images/gallery_image_headshot.JPG",
    "images/gallery_image_memorial.jpg",
    "images/nat_logo.png",
];

let index = 0;
document.querySelector(".gallery_image").src = PHOTOS[index];

document.querySelector(".gallery_prev").disabled = true;
document.querySelector(".gallery_prev").classList.add('disabled_button');

document.querySelector(".gallery_next").addEventListener("click", () => {
    index += 1;
    document.querySelector(".gallery_prev").classList.remove('disabled_button');
    document.querySelector(".gallery_prev").disabled = false;
    if (index === PHOTOS.length - 1) {
        // disabled the button 
        document.querySelector(".gallery_next").classList.add('disabled_button');
        document.querySelector(".gallery_next").disabled = true;
    }
    document.querySelector(".gallery_image").src = PHOTOS[index];
    console.log("next clicked");
})

document.querySelector(".gallery_prev").addEventListener("click", () => {
    index -= 1;
    document.querySelector(".gallery_next").disabled = false;
    document.querySelector(".gallery_next").classList.remove('disabled_button');
    if (index === 0) {
      document.querySelector(".gallery_prev").classList.add('disabled_button');
      document.querySelector(".gallery_prev").disabled = true;
    }
    document.querySelector(".gallery_image").src = PHOTOS[index];
    console.log("prev clicked");
});