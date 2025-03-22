function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    if (username === "user" && password === "123" && role === "user") {
        window.location.href = "user_home.html";
    } else if (username === "admin" && password === "admin123" && role === "admin") {
        window.location.href = "admin_home.html";
    } else {
        alert("Invalid credentials!");
    }
}
