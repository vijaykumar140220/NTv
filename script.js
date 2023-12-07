function validateForm(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var errorMessage = document.getElementById('error-message');

    // Simple validation, you can customize this as needed
    if (!name || !email || !message) {
        errorMessage.textContent = 'All fields are required';
        return;
    }

    // Additional email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorMessage.textContent = 'Please enter a valid email address';
        return;
    }

    // If all validations pass, you can submit the form or perform further actions
    errorMessage.textContent = ''; // Clear previous error messages
    alert('Form submitted successfully!');
    // You can add additional logic here, such as sending the form data to a server
}
