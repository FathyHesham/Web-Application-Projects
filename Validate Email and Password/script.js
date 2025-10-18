// [1] Get All Selector
// (Email Input - Email Error - Password Input - Password Error - Confirm Password Input - Confirm Password Error)
const formVaildate = document.querySelector("form"),
    emailInput = document.querySelector(".email"),
    emailErrorMessage = document.querySelector(".errer-email-message"),
    passwordInput = document.querySelector(".password"),
    passwordErrorMessage = document.querySelector(".errer-password-message"),
    confirmInput = document.querySelector(".confirm-password"),
    confirmErrorMessage = document.querySelector(".error-confirm-message"),
    signUpButton = document.querySelector(".signUp");

// [2] Add Event Submit Of SignUp Button
formVaildate.addEventListener("submit", function (event) {
    // Stops the browser's default action for the event (e.g., stops a form from submitting)
    event.preventDefault();
    // Add Check Email Function
    checkEmailFormat();
    // Add Check Password Function
    checkPasswordFormat();
    // Add Check Confirm Password
    confirmPassword();

    // Add Real Time Validate Using "keyup" Event
    emailInput.addEventListener("keyup", checkEmailFormat);
    passwordInput.addEventListener("keyup", checkPasswordFormat);
    confirmInput.addEventListener("keyup", confirmPassword);

    // After Complete Input In Form
    if (!emailErrorMessage.classList.contains("invaild") &&
        !passwordErrorMessage.classList.contains("invaild") &&
        !confirmErrorMessage.classList.contains("invaild")) {
        window.alert("❤️Success! You're all signed up👋");
    }
});
// [3] Check Of Email Format
function checkEmailFormat () {
    // Create Email Pattern
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    // Check The Email Pattern Is Match Or Not
    // If Email Is Not Match Add Class Name "invaild" In Error Mesaage,
    // Else Remove The Class Name Form Error Message
    if (!emailInput.value.match(emailPattern)) {
        return emailErrorMessage.classList.add("invaild");
    } else {
        return emailErrorMessage.classList.remove("invaild");
    }
}
// [4] Check Of Password Format
function checkPasswordFormat () {
    // Create Password Format
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    // Check The Password Pattern Is Match Or Not
    // If Password Is Not Match Add Class Name "invaild" In Error Mesaage,
    // Else Remove The Class Name Form Error Message
    if (!passwordInput.value.match(passwordPattern)) {
        return passwordErrorMessage.classList.add("invaild");
    } else {
        return passwordErrorMessage.classList.remove("invaild");
    }
}
// [5] Check If Confirm Password Input Is Equal Or Not Password Input
function confirmPassword () {
    // Check The Password Is Match Or Not
    // If Password Is Not Match Add Class Name "invaild" In Error Mesaage,
    // Else Remove The Class Name Form Error Message
    if (passwordInput.value !== confirmInput.value || confirmInput.value === "") {
        return confirmErrorMessage.classList.add("invaild");
    } else {
        return confirmErrorMessage.classList.remove("invaild");
    }
}
// [6] Hide And Show Password
// Get All Eye Icons
const eyeIcons = document.querySelectorAll(".show-hide");
// Using ForEach To Loop Of This Icons
eyeIcons.forEach((eyeIcon) => {
    // Add Event Click For Each EyeIcon
    eyeIcon.addEventListener("click", () => {
        // Get The Parent Element For Each Icon
        const parentInput = eyeIcon.parentElement.querySelector("input");
        //  Using If Statment To Check The Type Of Input.
        if (parentInput.type === "password") {
            // Relace The Class Name Form fa-eye-slash TO fa-eye
            eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
            // Make The Password Of Text
            parentInput.type = "text";
        } else {
            // Relace The Class Name Form fa-eye TO fa-eye-slash
            eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
            // Return The Password Of password
            parentInput.type = "password";
        }
    });
});
