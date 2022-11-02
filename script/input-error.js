const contactForm = document.querySelector(".contact-form");
const subject = document.querySelector("#subject");
const inputError = document.querySelector(".input-error");
const subjectError = document.querySelector("#subjectError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const fullName = document.querySelector("#fullname");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const successMessage = document.querySelector("#successMessage");

function checkLength(value, minimumLength) {
    if (value.trim().length >= minimumLength) {
        return true;
    }
    else {
        return false;
    }
}

function validateForm() {
    event.preventDefault();

    var isFormValid = true;

    if (checkLength(subject.value, 15) === true) {
        subjectError.style.display = "none";
    }
    else {
        subjectError.style.display = "block";
        isFormValid = false;
    }

    if (checkLength(fullName.value, 5) === true) {
        nameError.style.display = "none";
    }
    else {
        nameError.style.display = "block";
        isFormValid = false;
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    }
    else {
        emailError.style.display = "block";
        isFormValid = false;
    }

    if (checkLength(message.value, 25) === true) {
        messageError.style.display = "none";
    }
    else {
        messageError.style.display = "block";
        isFormValid = false;
    }

    if (isFormValid) {
        setTimeout(() => {
            fullName.value = "";
            email.value = "";
            message.value = "";
            subject.value = "";
            successMessage.style.display = "block";
        }, 1100);


        setTimeout(() => {
            successMessage.style.display = "none";
        }, 10000);

    }
}

contactForm.addEventListener("submit", validateForm);

function validateEmail(email) {
    const mailForm = /\S+@\S+\.\S+/;
    const emailMatch = mailForm.test(email);
    return emailMatch;
};
