const actionBtn = document.getElementById("action-btn");
const formContainer = document.getElementById("contact-form-container");
const closeBtn = document.getElementById("close-form");
const contactForm = document.getElementById("contact-form");

function openForm() {
    formContainer.classList.add("visible");
}

function closeForm() {
    formContainer.classList.remove("visible");
}

actionBtn.addEventListener("click", function () {
    if (confirm("Hi guys! Do you want to contact me?")) {
        openForm();
    }
});

closeBtn.addEventListener("click", closeForm);

formContainer.addEventListener("click", function (event) {
    if (event.target === formContainer) {
        closeForm();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeForm();
    }
});

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for reaching out! Your message has been sent.");
    closeForm();
    contactForm.reset();
});
