const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const CPassword = document.getElementById("c-password");

//Show Error Message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "input error";
  const email = formControl.querySelector("email");
  email.innerText = message;
}

//Show Success Message
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList.add("success");
}

//Check Required Fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `$getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

//Get Field Name
function getFieldName(input) {
  return input.id.chartAt(0).toUpperCase() + input.id.chartAt(1);
}

// Check Input Lenght
function checkLenght(input, min, max) {
  if (input.value.lenght < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// Check E-mail is valid
function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9(1,3)\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "E-mail is not valid");
  }
}

// Check Password Match
function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Password do not match");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkRequired([username, email, password, CPassword]);
  checkLenght(username, 3, 15);
  checkLenght(password, 8, 25);
  checkEmail(email);
  checkPasswordMatch(password, CPassword);
});
