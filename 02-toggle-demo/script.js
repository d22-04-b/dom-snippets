/**
 *
 * - X We have a fixed user with email, password given (object)
 * - X Grab login button from DOM
 * - X Make login button clickable (=> event listener)
 * - When User clicks login we want to do:
 *   - X grab user email and password input from input fields
 *   - X check if typed email password match email password of user
 *   - wenn ja: zeige dashboard container
 *   - wenn nein: zeige error container
 *
 */

console.log("JS ist da! Zu Diensten!");

// GRAB DOM NODES
const elBtnLogin = document.querySelector(".btn-login");
const elInputEmail = document.querySelector("input[name='email']");
const elInputPw = document.querySelector("input[name='password']");
const elDashboard = document.querySelector(".dashboard");
const elError = document.querySelector(".error");

const user = {
  email: "admin@timur.com",
  password: "timur123",
};

// MAKE BUTTON clickable ???
elBtnLogin.addEventListener("click", () => {
  console.log("Clicky...");
  const emailTyped = elInputEmail.value;
  const pwTyped = elInputPw.value;

  if (emailTyped === user.email && pwTyped === user.password) {
    console.log("Login successful!");
    // elDashboard.classList.toggle("invisible");
    elDashboard.style.display = "block";
    elError.style.display = "none";
  } else {
    console.log("FALSCH FALSCH FALSCH! Raus!");
    // elError.classList.toggle("invisible");
    elError.style.display = "block";
    elDashboard.style.display = "none";
  }

  /**
   * Keyboard hacks:
   *
   * STRG+L => ganze Zeile selectend
   * ALT gedrückt und Pfeiltasten hoch runter => Zeile hoch / runter schieben
   * STRG+SPACE => zeige alle Variablen und Functions an
   * STRG+SHIFT+I => format code!
   */
});
