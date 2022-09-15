const submitBtn = document.querySelector("button");
const fName = document.querySelector("#firstName");
const lName = document.querySelector("#lastName");
const userEmail = document.querySelector("#email");
const userPhone = document.querySelector("#phone");
const userPassword = document.querySelector("#password");
const userConfirmed = document.querySelector("#confirmPassword");
const errorMsg = document.querySelector(".error-msg");

const inputs = [
  fName,
  lName,
  userEmail,
  userPhone,
  userPassword,
  userConfirmed,
];

// Removes error class when focused on
inputs.forEach((input) => {
  input.addEventListener("keydown", () => {
    errorMsg.textContent = "";
    input.classList.remove("error");
    //Clears errors in both password and confirmed password inputs
    if (input === userPassword || input === userConfirmed) {
      userPassword.classList.remove("error");
      userConfirmed.classList.remove("error");
    }
  });
});

inputs.forEach((input) => {
  input.addEventListener("invalid", () => {
    input.classList.add("error");
    errorMsg.textContent = "* Some fields were entered incorrectly";
  });
});

function confirmPassword(pwd, confirmed) {
  if (pwd.value !== confirmed.value) {
    userPassword.classList.add("error");
    userConfirmed.classList.add("error");
    userPassword.value = "";
    userConfirmed.value = "";
    errorMsg.textContent = "* Passwords don't match";
    return false;
  }
}

submitBtn.addEventListener("click", (e) => {
  if (confirmPassword(userPassword, userConfirmed) === false) {
    e.preventDefault();
  }
});
