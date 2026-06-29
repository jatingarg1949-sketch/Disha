// ================================
// OPERATION: MAKE DISHA LAUGH
// script.js (Part 1)
// ================================

// Pages
const pages = document.querySelectorAll(".page");
let currentPage = 0;

function showPage(index) {
    pages.forEach(page => page.classList.remove("active"));
    pages[index].classList.add("active");
    currentPage = index;
}

// Buttons
const startBtn = document.getElementById("startBtn");
const escapeBtn = document.getElementById("escapeBtn");
const celebrateBtn = document.getElementById("celebrate");

// Scanner
const bar = document.getElementById("bar");
const scan = document.getElementById("scan");

// Mission 1
let escaped = 0;

escapeBtn.addEventListener("mouseenter", () => {
    if (escaped >= 8) return;

    const x = Math.random() * 220 - 110;
    const y = Math.random() * 160 - 80;

    escapeBtn.style.transform = `translate(${x}px, ${y}px)`;

    escaped++;
});

escapeBtn.addEventListener("click", () => {
    alert("😂 Nice try! You passed Mission 1.");
    showPage(2);
});

// Start Mission
startBtn.addEventListener("click", () => {
    showPage(1);
});

// Mission 2
const gifts = document.querySelectorAll(".gift");

gifts.forEach(gift => {

    gift.addEventListener("click", () => {

        if (gift.dataset.good === "1") {

            alert("🎉 Correct! You found the birthday surprise!");

        } else {

            alert("😂 Wrong gift! But we'll let you continue.");

        }

        startScanner();

    });

});

// Scanner
function startScanner() {

    showPage(3);

    let progress = 0;

    const messages = [

        "Scanning Smile 😊",

        "Checking Cake 🎂",

        "Loading Happiness ❤️",

        "Birthday Detected 🎉"

    ];

    let index = 0;

    scan.innerHTML = messages[0];

    const timer = setInterval(() => {

        progress++;

        bar.style.width = progress + "%";

        if (progress % 25 === 0 && index < messages.length - 1) {

            index++;

            scan.innerHTML = messages[index];

        }

        if (progress >= 100) {

            clearInterval(timer);

            scan.innerHTML = "✅ Scan Complete!";

            setTimeout(() => {

                showPage(4);

            }, 1500);

        }

    }, 40);

}
