// sign up javascript code //


document.addEventListener('DOMContentLoaded', () => {
    const signUpForm = document.getElementById('signUpForm');
    const message = document.getElementById('message');

    signUpForm?.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting the traditional way

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (username && email && password) {
            if (message) {
                message.textContent = 'Sign up successful!';
                message.style.color = 'green';
            }
        } else {
            if (message) {
                message.textContent = 'Please fill in all fields';
                message.style.color = 'red';
            }
        }
    });
});
