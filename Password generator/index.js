// <-- Toggle dark or light mode -->
const toggleSwitch = document.querySelector(".toggle-switch");

toggleSwitch.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// <--- Password length slider --->
const slider = document.getElementById("pw-length"); // range slider
const output = document.querySelector("output"); // text which displays the value of the range slider
output.value = slider.value; // displays default slider value

// Updates the current slider value each time the user drags the slider handle/thumb
slider.addEventListener("input", function () {
  output.value = this.value;
});

// <-- Password generator -->
const button = document.getElementById("action-btn");
const passwords = document.getElementsByClassName("pw");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const nums = "0123456789";
const symbols = "~`!@#$%^&*()-_=+{}[]|;:,./<>?";
const charSet = upperCase + lowerCase + nums + symbols;

// Generates a password based on the user's chosen length
const generatePassword = () => {
  let password = "";
  const pwLength = output.value;

  for (let i = 0; i < pwLength; i++) {
    const randomIndex = Math.floor(Math.random() * charSet.length); // generates random index number
    password += charSet[randomIndex]; // adds random char to password
  }
  return password;
};

// Populates the generated passwords in the password list container
button.addEventListener("click", function () {
  [...passwords].forEach((password) => {
    password.textContent = generatePassword();
    password.classList.add("active"); // adds class="active" to indicate password list is populated
  });
});

// <-- Clipboard -->
const copyPassword = (event) => {
  // Prevents event from firing if password list is unpopulated
  if (!event.target.classList.contains("active")) {
    return false;
  }

  // Copies password to clipboard
  const password = event.target.textContent;
  navigator.clipboard.writeText(password);

  // Displays "Copied!"
  const copyDiv = document.createElement("div");
  copyDiv.classList.add("copy");
  copyDiv.textContent = "Copied!";
  event.target.append(copyDiv);
  setTimeout(() => {
    copyDiv.parentNode.removeChild(copyDiv);
  }, 500);
};

[...passwords].forEach((password) => {
  password.addEventListener("click", copyPassword);
});
