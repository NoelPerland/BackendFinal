const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const form = document.querySelector("form");
const h2 = document.querySelector("h2");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;

  const response = await fetch("http://localhost:5050/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  h2.textContent = response.statusText;
});
