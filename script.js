// Toggle menu for mobile
document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const menuModal = document.getElementById("menu-modal");
    const menuBtnIcon = menuBtn ? menuBtn.querySelector("i") : null;
    const navbar = document.getElementById("navbar");
    const navClue = document.getElementById("nav-clue");

    if (!menuBtn || !menuModal || !menuBtnIcon || !navbar || !navClue) {
        console.error("Error: Required elements not found in DOM");
        return;
    }

    menuBtn.addEventListener("click", () => {
        const isOpen = menuModal.style.display === "flex";
        menuModal.style.display = isOpen ? "none" : "flex";
        menuBtnIcon.classList.toggle("ri-menu-line", isOpen);
        menuBtnIcon.classList.toggle("ri-close-line", !isOpen);
        document.body.style.overflow = isOpen ? "auto" : "hidden";
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav_links a').forEach(link => {
        link.addEventListener('click', () => {
            menuModal.style.display = "none";
            menuBtnIcon.classList.add("ri-menu-line");
            menuBtnIcon.classList.remove("ri-close-line");
            document.body.style.overflow = "auto";
        });
    });

    // Efek header muncul/hilang berdasarkan posisi cursor
    let isMouseInHeader = false;
    let isMouseNearTop = false;

    navbar.addEventListener("mouseenter", () => {
        isMouseInHeader = true;
        navbar.classList.remove("hidden");
        navClue.classList.add("hidden");
    });

    navbar.addEventListener("mouseleave", () => {
        isMouseInHeader = false;
        if (!isMouseNearTop) {
            navbar.classList.add("hidden");
            navClue.classList.remove("hidden");
        }
    });

    document.addEventListener("mousemove", (e) => {
        isMouseNearTop = e.clientY <= 10;
        if (isMouseNearTop || isMouseInHeader) {
            navbar.classList.remove("hidden");
            navClue.classList.add("hidden");
        } else {
            navbar.classList.add("hidden");
            navClue.classList.remove("hidden");
        }
    });

    navbar.classList.add("hidden");
    navClue.classList.remove("hidden");

    // Initialize with a random fact
    showRandomFact();
});

// Fungsi untuk menutup modal menu
function closeMenuModal() {
    const menuModal = document.getElementById("menu-modal");
    const menuBtnIcon = document.querySelector("#menu-btn i");
    menuModal.style.display = "none";
    menuBtnIcon.classList.add("ri-menu-line");
    menuBtnIcon.classList.remove("ri-close-line");
    document.body.style.overflow = "auto";
}

// Close menu modal when clicking outside
window.addEventListener('click', function(event) {
    const menuModal = document.getElementById("menu-modal");
    if (event.target === menuModal) {
        closeMenuModal();
    }
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
    },
    three: {
        title: "Horn Three Tastes Ice Cream",
        description: "Percampuran tiga rasa yang manis, memberikan pengalaman rasa yang unik dan menyenangkan!"
    },
    vanilla: {
        title: "Vanilla Dream",
        description: "Klasik yang tak pernah mengecewakan! Rasa vanilla premium dengan aroma yang menggoda."
    },
    matcha: {
        title: "Matcha Green",
        description: "Segar dengan sentuhan teh hijau premium dari Jepang. Untuk pecinta rasa yang unik dan menyehatkan!"
    },
    rainbow: {
        title: "Rainbow Swirl",
        description: "Warna-warni yang bikin semangat! Kombinasi berbagai rasa buah yang segar dalam satu cone."
    },
    cookies: {
        title: "Cookies & Cream",
        description: "Perpaduan sempurna es krim vanilla dengan potongan cookies cokelat yang renyah."
    }
};

// Fungsi untuk membuka modal deskripsi es krim
function openModal(flavor) {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");

    modalTitle.innerText = iceCreamData[flavor].title;
    modalDescription.innerText = iceCreamData[flavor].description;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

// Fungsi untuk menutup modal deskripsi es krim
function closeModal() {
    document.getElementById("modal").style.display = "none";
    document.body.style.overflow = "auto";
}

// Close modal deskripsi es krim when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        closeModal();
    }
});

// Fungsi untuk fakta acak
function showRandomFact() {
    const facts = [
        "Es krim warna-warni bisa bikin suasana pesta lebih seru! 🎉",
        "Ada es krim rasa unicorn yang penuh glitter, lho! 🦄✨",
        "Makan es krim sambil ketawa bikin hidup lebih ceria! 😄🍦",
        "Es krim pertama kali dibuat di China sekitar 200 SM! 🕰️",
        "Rata-rata orang Amerika makan sekitar 23 liter es krim per tahun! 🇺🇸",
        "Vanilla adalah rasa es krim paling populer di dunia! 🌍",
        "Sensasi 'brain freeze' terjadi ketika es krim menyentuh langit-langit mulut! ❄️"
    ];
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById("fact-text").innerText = randomFact;
}

// Fungsi untuk carousel
function scrollCarousel(direction) {
    const orderGrid = document.querySelector('.order_grid');
    const cardWidth = document.querySelector('.order_card').offsetWidth + 32; // Lebar kartu + gap (2rem = 32px)
    const scrollAmount = cardWidth * 1; // Scroll sebesar 1 kartu

    if (direction === 'next') {
        orderGrid.scrollLeft += scrollAmount;
    } else if (direction === 'prev') {
        orderGrid.scrollLeft -= scrollAmount;
    }
}

document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    Swal.fire({
        title: 'Mengirim...',
        text: 'Harap tunggu sebentar.',
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
        }
    });

    const scriptURL = 'https://script.google.com/macros/s/AKfycbx7KvyRtAdUTHu4VQ_K_yNn-Q0olboT74S_UaamEx8kW65U28nz_ZyLcEUVA1Wn_Znv/exec';
    const formData = new FormData(this);
    const data = {
        action: 'submitOrder',
        name: formData.get('name'),
        email: formData.get('email'),
        variant: formData.get('variant'),
        quantity: formData.get('quantity'),
        deliveryDate: formData.get('deliveryDate'),
        notes: formData.get('notes'),
        timestamp: new Date().toISOString()
    };
    
    fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then(() => {
        Swal.fire({
            title: 'Pesanan Berhasil!',
            text: 'Terima kasih telah memesan es krim kami. Kami akan segera menghubungi Anda.',
            icon: 'success',
            confirmButtonText: 'OK'
        });
        this.reset();
    }).catch(error => {
        Swal.fire({
            title: 'Error',
            text: 'Terjadi kesalahan saat mengirim pesanan. Silakan coba lagi.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        console.error('Error:', error);
    });
});