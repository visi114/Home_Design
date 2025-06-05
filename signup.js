document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (username && email && password) {
        alert("Signup successful! 🎉");
        window.location.href = "index.html";
    } else {
        alert("Please fill in all fields.");
    }
});
