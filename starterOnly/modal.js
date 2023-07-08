function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelectorAll(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// launch modal event
modalClose.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// form entries

const form = document.getElementById("form");

const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");
const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");

const firstNameError = document.getElementById("firstError");

// Keep form without resetting

form.addEventListener("submit", function (e) {
  e.preventDefault();
});

// Regex Email

const validateEmail = (props) => {
  let emailRegex = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
  return emailRegex.test(props);
};

// Regex Number

const validateNumber = (props) => {
  let numberRegex = new RegExp("[0-9]+");
  return numberRegex.test(props);
};

function validate() {
  let firstNameValid;
  let lastNameValid;
  let emailValid;
  let quantityValid;
  let locationValid;
  let checkbox1Valid;

  if (firstName.value.length >= 2) {
    firstNameValid = false;
    firstName.classList.remove("error");
    firstNameError.style.display = "none";
  } else {
    firstName.classList.add("error");
    firstNameError.style.display = "block";

  }
  if (lastName.value.length >= 2) {
    lastNameValid = true;
  }
  if (validateEmail(email.value)) {
    emailValid = true;
  }
  if (validateNumber(quantity.value)) {
    quantityValid = true;
  }
  if (
    location1.checked ||
    location2.checked ||
    location3.checked ||
    location4.checked ||
    location5.checked ||
    location6.checked
  ) {
    locationValid = true;
  }
  if (checkbox1.checked) {
    checkbox1Valid = true;
  }
  
}
