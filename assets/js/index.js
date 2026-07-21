// home - caurosel

const wrapper = document.querySelector(".slides-wrapper");
const slides = document.querySelectorAll(".slide");

let current = 0;
const total = slides.length;
const interval = 5000; // 5 seconds

// Show first slide
showSlide(current);

// Auto slide
setInterval(() => {

    current++;

    if (current >= total) {
        current = 0;
    }

    showSlide(current);

}, interval);

function showSlide(index) {

    // Remove active class from all slides
    slides.forEach((slide) => {

        slide.classList.remove("active");

        // Reset tag animation
        const tag = slide.querySelector(".hero-tag-i");

        if (tag) {
            tag.style.animation = "none";
        }

    });

    // Move slider
wrapper.style.transform = `translateX(-${index * (100/3)}%)`;
    // Activate current slide
    const currentSlide = slides[index];
    currentSlide.classList.add("active");

    // Restart tag animation
    const tag = currentSlide.querySelector(".hero-tag-i");

    if (tag) {

        // Force browser reflow
        void tag.offsetWidth;

        tag.style.animation = "tagDrop 0.7s ease 1.5s forwards";

    }

}

window.addEventListener("load", () => {

    console.log("=== INDEX DEBUG ===");
    console.log("Viewport Width:", window.innerWidth);
    console.log("Document Width:", document.documentElement.scrollWidth);

    [...document.querySelectorAll("*")].forEach(el => {

        const r = el.getBoundingClientRect();

        if (r.right > window.innerWidth + 1 || r.left < -1) {

            console.log("Overflow Element:", el);
            console.log({
                class: el.className,
                id: el.id,
                left: Math.round(r.left),
                right: Math.round(r.right),
                width: Math.round(r.width)
            });

        }

    });

});