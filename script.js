const container = document.querySelector(".container");

document.getElementById("startBtn").addEventListener("click", () => {

container.innerHTML = `
<h1 class="title">💖 Love Quest 💖</h1>

<p class="subtitle">
Before we begin...
Tell us your names ❤️
</p>

<input id="yourName" placeholder="Your Name">

<input id="partnerName" placeholder="Partner's Name">

<br><br>

<button id="continueBtn">Continue ❤️</button>
`;

document.getElementById("continueBtn").addEventListener("click", () => {

const you = document.getElementById("yourName").value || "You";
const partner = document.getElementById("partnerName").value || "My Love";

container.innerHTML = `
<h1 class="title">Welcome ${you} ❤️ ${partner}</h1>

<p class="subtitle">
Every great love story begins with a single step.

Today your Love Quest officially begins.

Ready for your first challenge?
</p>

<button id="chapter1">Start Adventure 🌸</button>
`;

});
});
