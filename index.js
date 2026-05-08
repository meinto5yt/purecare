// Check login status on page load
document.addEventListener('DOMContentLoaded', function() {
    const loggedIn = localStorage.getItem('loggedIn');
    const loginLink = document.getElementById('login-link');
    const logoutLink = document.getElementById('logout-link');

    if (loggedIn === 'true') {
        if (loginLink) loginLink.style.display = 'none';
        if (logoutLink) logoutLink.style.display = 'inline';
    } else {
        if (loginLink) loginLink.style.display = 'inline';
        if (logoutLink) logoutLink.style.display = 'none';
    }
});
// Handle logout button click
const logoutBtn = document.getElementById('logout-btn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', function(event) {
        event.preventDefault();
        localStorage.removeItem('loggedIn');
        const loginLink = document.getElementById('login-link');
        const logoutLink = document.getElementById('logout-link');
        if (loginLink) loginLink.style.display = 'inline';
        if (logoutLink) logoutLink.style.display = 'none';
        alert('Logged out successfully!');
    });
}