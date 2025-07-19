
document.querySelector('.cta-button').addEventListener('click', function() {
    let username = prompt("Enter username:");
    let password = prompt("Enter password:");
    
    if (username === "user" && password === "password123") {
        alert("Login Successful!");
        window.location.href = "index.html"; 
    } else {
        alert("Invalid credentials, please try again.");
    }
});
