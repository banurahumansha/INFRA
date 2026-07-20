if (typeof AOS !== "undefined") {
   AOS.init({
    duration: 1500,      // slower = more visible
    once: false,         // repeats when scrolling
    mirror: true,        // animate when scrolling up too
    offset: 50,          // trigger earlier
    easing: 'ease-in-out',
});
}


const counters = document.querySelectorAll('.counter');

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;
            const target = +counter.dataset.target;
            let current = 0;

            const step = Math.ceil(target / 50);

            counter.textContent = "0+";

            const timer = setInterval(() => {

                current += step;

                if (current >= target) {

    if(counter.classList.contains("no-plus")){
        counter.textContent = target;
    }else{
        counter.textContent = target + "+";
    }

    clearInterval(timer);

}else{

    if(counter.classList.contains("no-plus")){
        counter.textContent = current;
    }else{
        counter.textContent = current + "+";
    }

}
            }, 30);

        }

    });

}, {
    threshold: 0.5
});

counters.forEach(counter => observer.observe(counter));

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