// Dummy numbers — You can fetch from localStorage or database later
document.getElementById("total-users").textContent = "120";
document.getElementById("total-plans").textContent = "45";
document.getElementById("total-wishlist").textContent = "78";

// Users Data
const users = [
  { name: "Harry", email: "harry@example.com", joined: "2025-01-15" },
  { name: "Luna", email: "luna@example.com", joined: "2024-12-10" },
  { name: "Hermione", email: "hermione@example.com", joined: "2025-02-01" },
  { name: "Ron", email: "ron@example.com", joined: "2025-03-05" }
];

// DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("userCount").textContent = users.length;

  // Logout Button
  document.getElementById("logoutBtn").addEventListener("click", function () {
    alert("You have been logged out.");
    window.location.href = "admin-login.html";
  });
});
