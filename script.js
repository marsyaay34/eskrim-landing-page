// Toggle menu for mobile
document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");
    const menuBtnIcon = menuBtn ? menuBtn.querySelector("i") : null;

    if (!menuBtn || !navLinks || !menuBtnIcon) {
        console.error("Error: #menu-btn, #nav-links, or icon not found in DOM");
        return;
    }

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("open");
        menuBtnIcon.classList.toggle("ri-menu-line");
        menuBtnIcon.classList.toggle("ri-close-line");
    });
});

// Data untuk deskripsi panjang
const iceCreamData = {
    mochi: {
        title: "Mochi Ice Cream",
        description: "Es krim kenyal dengan lapisan mochi yang lembut! Setiap gigitan penuh kejutan, cocok untuk kamu yang suka petualangan rasa."
    },
    chocolate: {
        title: "Choco Ice Cream",
        description: "Cokelat premium yang meleleh di mulut, bikin hari jadi lebih manis! Tambah sprinkle untuk ekstra keceriaan."
    },
    strawberry: {
        title: "Strawberry Ice Cream",
        description: "Segar seperti musim panas, es krim stroberi kami dibuat dari buah asli. Rasakan kebahagiaan dalam setiap suapan!"
    }
};

// Fungsi untuk membuka modal
function openModal(flavor) {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");

    modalTitle.innerText = iceCreamData[flavor].title;
    modalDescription.innerText = iceCreamData[flavor].description;
    modal.style.display = "flex";
}

// Fungsi untuk menutup modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Fungsi untuk fakta acak
function showRandomFact() {
    const facts = [
        "Es krim warna-warni bisa bikin suasana pesta lebih seru!",
        "Ada es krim rasa unicorn yang penuh glitter, lho!",
        "Makan es krim sambil ketawa bikin hidup lebih ceria!"
    ];
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById("fact-text").innerText = randomFact;
}