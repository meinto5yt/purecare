// ==========================
// SIGN UP FUNCTION
// ==========================

function signup(event) {

    event.preventDefault();

    const username = document.getElementById("signupUsername").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    // Save user data
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Account created successfully!");

    // Redirect to login page
    window.location.href = "log.html";
}


// ==========================
// LOGIN FUNCTION
// ==========================

function login(event) {

    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Get saved data
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    const error = document.getElementById("error");

    // Check username + password
    if (username === savedUsername && password === savedPassword) {

        // Save login state
        localStorage.setItem("loggedIn", "true");

        // Go to home page
        window.location.href = "index.html";

    } 
    
    else {

        error.innerText = "Wrong username or password!";

    }
}