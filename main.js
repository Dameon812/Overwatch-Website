
// This button switches the website between dark mode and light mode

const themeButton = document.getElementById("themeBtn");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
        themeButton.textContent = "Switch to Dark Mode";
    } else {
        themeButton.textContent = "Switch to Light Mode";
    }
});