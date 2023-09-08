document.addEventListener("DOMContentLoaded", function () {
    const nameForm = document.getElementById("nameForm");
    const nameInput = document.getElementById("nameInput");
    const greetingMessage = document.getElementById("greetingMessage");

    nameForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const userName = nameInput.value;
        greetingMessage.textContent = `Hello, ${userName}! Welcome to the Webpage.`;
    });
});
