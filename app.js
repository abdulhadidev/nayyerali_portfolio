// By Default JS:
const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: "2000",
    reset: true
});
// Hero Section:
sr.reveal(".hero-left", { origin: "left", distance: "100px", delay: "200" });
sr.reveal(".hero-right", { origin: "right", distance: "100px", delay: "200" });

// About Section:
sr.reveal(".about-wrapper", { origin: "top", distance: "90px", delay: "300" });
sr.reveal(".about-left", { origin: "left", distance: "200px", delay: "300" });
sr.reveal(".about-right", { origin: "right", distance: "200px", delay: "300" });

// Service Section:
sr.reveal(".services-wrapper", { origin: "top", distance: "90px", delay: "300" });
sr.reveal(".ser-all-cards", { origin: "bottom", distance: "90px", delay: "300" });

// Call to Action Banner Section:
sr.reveal(".banner", { origin: "bottom", distance: "100px", delay: "300" });

// Portfolio Section:
sr.reveal(".port-wrapper", { origin: "top", distance: "90px", delay: "300" });
sr.reveal(".port-all-cards", { origin: "bottom", distance: "125px", delay: "300" });

// Contact and Footer Section:
sr.reveal(".cont-wrapper", { origin: "top", distance: "90px", delay: "300" });
sr.reveal(".top", { origin: "bottom", distance: "130px", delay: "400" });
sr.reveal(".bottom", { origin: "bottom", distance: "140px", delay: "500" });
sr.reveal(".inner-footer", { origin: "bottom", distance: "90px", delay: "600" });
sr.reveal(".copyright", { origin: "bottom", distance: "90px", delay: "700" });
