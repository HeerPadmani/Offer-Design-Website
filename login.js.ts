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


// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Function to handle form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get user input
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Sign in user with Firebase Auth
    firebase.auth().signInWithEmailAndPassword(username, password)
        .then((userCredential) => {
            // Signed in successfully
            console.log("User logged in successfully:", userCredential.user);
            showSnackbar();
        })
        .catch((error) => {
            // Handle errors
            const errorMessage = error.message;
            console.error("Login error:", errorMessage);
            document.getElementById("errorMessage").innerText = errorMessage;
        });
});





"YOUR_API_KEY", "YOUR_AUTH_DOMAIN", "YOUR_PROJECT_ID", "YOUR_STORAGE_BUCKET", "YOUR_MESSAGING_SENDER_ID", and "YOUR_APP_ID" 