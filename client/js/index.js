const loginButton = document.querySelector("#loginButton");
const registerButton = document.querySelector("#registerButton");

loginButton.addEventListener("click", () => {
  window.location.href = "./login.html";
});
registerButton.addEventListener("click", () => {
  window.location.href = "./register.html";
});
