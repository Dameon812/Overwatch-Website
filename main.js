

// Get the button and paragraph from the HTML page
const button = document.getElementById("favoriteBtn");
const message = document.getElementById("favoriteHero");

button.addEventListener("click", function () {
    message.textContent = "⭐ My favorite Overwatch hero is Tracer!";
    message.style.color = "#f97316";
    message.style.fontSize = "24px";
    message.style.fontWeight = "bold";
});