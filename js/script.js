// getting the buttons

const form = document.querySelector(".footer__form");

function validateEmail(email) {
  var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regex.test(email)) {
    alert("Invalid email address.");
    return false;
  }
  return true;
}
console.log(validateEmail("modibocamara@gmail.com"));
form.addEventListener("click", function (e) {
  e.preventDefault();
  const input = document.querySelector('[type="email"]');

  const error = document.querySelector(".footer__input--error");

  if (e.target.classList.contains("footer__btn")) {
    if (input.value) {
      if (validateEmail(input.value)) {
        form.classList.remove("on-error");
        form.classList.add("on-success");
        error.textContent = "Registration is successful";

        setInterval(function () {
          form.classList.remove("on-success");
          error.textContent = "";
        }, 3000);
      } else {
        error.textContent = "Please enter a valid email";
        form.classList.add("on-error");
      }
    } else {
      error.textContent = "Please fill in the form";
      form.classList.add("on-error");
    }
  }
});
