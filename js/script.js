/* ******variables****** */
const subscribeForm = document.getElementById("subscribe-form");
const subscribeInput = document.getElementById("subscribe-input");
const errorMessage = document.getElementById("error-message");

/* ******functions****** */
function validateEmail(input) {
  let validMailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  return validMailFormat.test(input) ? true : false;
}

/* ******event listeners****** */
subscribeForm.addEventListener("submit", (e) => {
  console.log(validateEmail(subscribeInput.value));
  if (subscribeInput.value.length <= 0) {
    subscribeForm.classList.add("error");
    errorMessage.innerHTML =
      "Whoops! It looks like you forgot to add your email";
    e.preventDefault();
  } else if (subscribeInput.value.length > 0) {
    if (validateEmail(subscribeInput.value) === false) {
      subscribeForm.classList.add("error");
      errorMessage.innerHTML = "Please provide a valid email address";
      e.preventDefault();
    }
  }
});
