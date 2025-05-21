document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signup-form");
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm-password");

 
  // Error Messages
  function validateField(input, errorSpanId) {
    const errorSpan = document.getElementById(errorSpanId);
    input.classList.remove("valid", "invalid"); // Reset previous validation messages
    errorSpan.textContent = "";

    // Check if the input is empty
    if (input.value.trim() === "") {
      input.classList.add("invalid");
      errorSpan.textContent = "This field is required.";
      return false;
    }

    // Validate email, password, and confirm password
    if (input === username && input.value.length < 3) {
      input.classList.add("invalid");
      errorSpan.textContent = "Username must be at least 3 characters.";
      return false;
    }

    if (input === email && !input.checkValidity()) {
      input.classList.add("invalid");
      errorSpan.textContent = "Please enter a valid email.";
      return false;
    }

    if (input === password && input.value.length < 6) {
      input.classList.add("invalid");
      errorSpan.textContent = "Password must be at least 6 characters.";
      return false;
    }

    if (input === confirmPassword && input.value !== password.value) {
      input.classList.add("invalid");
      errorSpan.textContent = "Passwords do not match.";
      return false;
    }

    // Mark as valid
    input.classList.add("valid");
    return true;
  }

  // Real-time validation for each input field
  username.addEventListener("input", function () {
    validateField(username, "username-error");
  });

  email.addEventListener("input", function () {
    validateField(email, "email-error");
  });

  password.addEventListener("input", function () {
    validateField(password, "password-error");
  });

  confirmPassword.addEventListener("input", function () {
    validateField(confirmPassword, "confirm-password-error");
  });

  // Submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const isUsernameValid = validateField(username, "username-error");
    const isEmailValid = validateField(email, "email-error");
    const isPasswordValid = validateField(password, "password-error");
    const isConfirmPasswordValid = validateField(confirmPassword, "confirm-password-error");

    if (isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
      alert("Account created successfully!");
      form.reset();

      // Clear all validation sections
      username.classList.remove("valid");
      email.classList.remove("valid");
      password.classList.remove("valid");
      confirmPassword.classList.remove("valid");

      document.getElementById("username-error").textContent = "";
      document.getElementById("email-error").textContent = "";
      document.getElementById("password-error").textContent = "";
      document.getElementById("confirm-password-error").textContent = "";
    } else {
      alert("Please fix the errors in the form.");
    }
  });
});