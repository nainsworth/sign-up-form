const submitBtn = document.querySelector("button");
const fName = document.querySelector("#firstName");
const lName = document.querySelector("#lastName");
const userEmail = document.querySelector("#email");
const userPhone = document.querySelector("#phone");
const userPassword = document.querySelector("#password");
const userConfirmed = document.querySelector("#confirmPassword");
let error = false

function isValid() {

}

function confirmPassword(pwd, confirmed) {
  if (pwd !== confirmed) {
    userPassword.classList.add(".error");
    
  }
}

submitBtn.addEventListener("click", () => {
  confirmPassword(userPassword, userConfirmed);
});
