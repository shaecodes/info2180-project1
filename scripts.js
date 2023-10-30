document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".newsletter form");
    const messageDiv = document.querySelector(".message");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const emailInput = document.getElementById("email");
      const email = emailInput.value.trim();

      if (email !== "") {
        messageDiv.innerHTML = `Thank you! Your email address <${email}> has been added to our mailing list!`;
      } else {
        messageDiv.innerHTML = "Please enter a valid email address.";
      }

      emailInput.value = "";
    });
  });