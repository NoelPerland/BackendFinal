const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;

  const response = await fetch("http://localhost:5050/register", {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(response);
});
