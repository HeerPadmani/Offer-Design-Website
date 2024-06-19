// login in javascript code //

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    loginForm?.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting the traditional way

        const username = (document.getElementById('username') as HTMLInputElement)?.value;
        function validateForm() {
            // Get the username input element
            var x = document.getElementById("snackbar");
            
            // Check if the username is empty
            if (username === "") {
                alert("Username is required");
                return false; // Prevent form submission
            }
            
            // If the username is not empty, allow the form to be submitted
            return true;
        }

        const password = (document.getElementById('password') as HTMLInputElement)?.value;

        // Dummy credentials for example purposes
        const correctUsername = 'user';
        const correctPassword = 'pass';

        if (username === correctUsername && password === correctPassword) {
            if (errorMessage) errorMessage.textContent = ''; // Clear any previous error messages
            alert('Login successful!'); // Display a success message
            // Here you can add code to redirect the user to another page, etc.
        } else {
            if (errorMessage) errorMessage.textContent = 'Invalid username or password'; // Show error message
        }
    });
});


 
