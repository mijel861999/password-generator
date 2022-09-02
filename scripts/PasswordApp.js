import "../styles/style.css";
import generatePassword from "./generatePassword";

// STATE

let state = {
  password: "",
  characterLenght: 5,
  hasUppercase: false,
  hasLowercase: false,
  hasNumbers: false,
  hasSymbols: false,
};

// DOM ELEMNTS

const buttonCopyPassword = document.getElementById("button-copy-password");
const buttonGeneratePassword = document.getElementById(
  "button-generate-password"
);

const uppercaseCheckbox = document.getElementById("uppercase-checkbox");
const lowercaseCheckbox = document.getElementById("lowercase-checkbox");
const numbersCheckbox = document.getElementById("numbers-checkbox");
const symbolsCheckbox = document.getElementById("symbols-checkbox");
const range = document.getElementById("range");

const passwordLength = document.getElementById("password-length");
const passwordValue = document.getElementById("password");

// EVENTS LISTENERS

// BUTTONS
buttonGeneratePassword.addEventListener("click", () => {
  const options = {
    ...state,
  };

  delete options.password;

  state.password = generatePassword(options);
	passwordValue.innerHTML = state.password
});

buttonCopyPassword.addEventListener("click", () => {
	if( navigator && navigator.clipboard && navigator.clipboard.writeText )
		return navigator.clipboard.writeText(state.password)
	return Promise.reject('The clipboard API is not available')
});

// RANGE

range.addEventListener("input", () => {
  passwordLength.innerHTML = range.value;
  state.characterLenght = range.value;
});

// CHECKBOX

uppercaseCheckbox.addEventListener("change", () => {
  state.hasUppercase = !state.hasUppercase;
});

lowercaseCheckbox.addEventListener("change", () => {
  state.hasLowercase = !state.hasLowercase;
});

numbersCheckbox.addEventListener("change", () => {
  state.hasNumbers = !state.hasNumbers;
});

symbolsCheckbox.addEventListener("change", () => {
  state.hasSymbols = !state.hasSymbols;
});
