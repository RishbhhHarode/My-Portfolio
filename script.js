// Toggle Mobile Menu
const menuIcon = document.querySelector(".menu-icon");
const navList = document.querySelector(".navlist");

menuIcon.addEventListener("click", () => {
    navList.classList.toggle("active");
});

// Theme Toggle (Dark/Light Mode)
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Load theme from LocalStorage
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    themeToggle.textContent = "☀️"; // Sun icon for light mode
} else {
    themeToggle.textContent = "🌙"; // Moon icon for dark mode
}

// Handle theme toggle
themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
    themeToggle.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll(".navlist a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: "smooth"
        });

        // Close mobile menu after clicking a link (for small screens)
        navList.classList.remove("active");
    });
});

// Work Section Animation (Fade-in Effect)
document.addEventListener("DOMContentLoaded", () => {
    const workItems = document.querySelectorAll(".work-item");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    let delay = 0;
    workItems.forEach((item) => {
        item.style.animationDelay = `${delay}s`;
        delay += 0.2; // Add delay for staggered effect
        observer.observe(item);
    });
});

// Open Social Media Links in New Tab
document.querySelectorAll(".social-icons a").forEach(anchor => {
    anchor.addEventListener("click", (e) => {
        e.preventDefault();
        window.open(anchor.href, "_blank");
    });
});





// Apply Theme Styles Dynamically
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
} else {
    document.body.classList.remove("dark-mode");
}




// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Select all education items
    const educationItems = document.querySelectorAll(".education-item");

    // Set up Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Add the 'show' class when the item is in view
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.2, // Trigger when 20% of the item is visible
    });

    // Observe each education item
    educationItems.forEach((item) => observer.observe(item));
});







// Contact Form Submit Handler
document.querySelector(".contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
});

const profileImg = document.querySelector(".hero-image img");

const hoverEffects = [
    "0 0 25px #ff00ff, 0 0 50px #00ffff",
    "0 0 20px #00ff00, 0 0 40px #ff9900",
    "0 0 30px #ffcc00, 0 0 50px #ff0066",
    "0 0 25px #00f0ff, 0 0 45px #7b2ff7",
    "0 0 30px #f953c6, 0 0 60px #b91d73"
];

profileImg.addEventListener("mouseenter", () => {
    const randomEffect = hoverEffects[Math.floor(Math.random() * hoverEffects.length)];
    profileImg.style.boxShadow = randomEffect;
});

profileImg.addEventListener("mouseleave", () => {
    // Reset back to base glow
    profileImg.style.boxShadow = "0 0 25px rgba(0, 255, 255, 0.5), 0 0 35px rgba(255, 0, 255, 0.4)";
});





const downloadBtn = document.getElementById("download-btn");
const status = document.getElementById("download-status");

downloadBtn.addEventListener("click", () => {
    // Show "Processing" animation
    status.classList.remove("hidden");

    // Hide after 1 second
    setTimeout(() => {
        status.classList.add("hidden");

        // Start download
        const link = document.createElement("a");
        link.href = "assets/KAPIL_SE.pdf";
        link.download = "Rishabh_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, 1000);
});
