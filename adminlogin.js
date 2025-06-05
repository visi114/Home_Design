// Hardcoded credentials for demo purposes
const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "admin123"
};

document.getElementById("adminLoginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("admin-username").value;
  const password = document.getElementById("admin-password").value;
  const errorMsg = document.getElementById("error-msg");

  if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
    // Redirect to admin homepage
    window.location.href = "adminhome.html";
  } else {
    errorMsg.textContent = "Invalid username or password.";
  }
});
