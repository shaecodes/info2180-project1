document.addEventListener("DOMContentLoaded", function() {
    let newsletterForm = document.getElementById("newsletter-form");
    let emailInput = document.getElementById("email");
    let messageContainer = document.querySelector(".message");

    newsletterForm.addEventListener("submit", function(event) {
        event.preventDefault(); 

        let email = emailInput.value.trim();
        let message = document.createElement("div");
        message.classList.add("message-text");

        if (email === "") {
            message.textContent = "Please enter a valid email address.";
        } else {
            message.textContent = "Thank you! Your email address " + email + " has been added to our mailing list!";
        }

        while (messageContainer.firstChild) {
            messageContainer.removeChild(messageContainer.firstChild);
        }

        messageContainer.appendChild(message);
    });
});


