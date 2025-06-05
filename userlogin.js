document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
// submit event — when the form is submitted
// e.preventDefault=Stops the form from submitting in the default way 
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Checks if both fields are filled 
    if (username && password) {
        alert("Login successful!");
        window.location.href = "index.html"; // Redirect to homepage
    } else {
        alert("Please fill in all fields.");
    }
});
