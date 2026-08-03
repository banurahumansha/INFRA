
document.addEventListener("DOMContentLoaded", function () {
console.log("CS JS LOADED");
    const cards = document.querySelectorAll(".pillar-card");
    const panels = document.querySelectorAll(".pillar-panel");

    cards.forEach(card => {

        card.addEventListener("click", function () {

            cards.forEach(c => c.classList.remove("active"));
            panels.forEach(p => p.classList.remove("active"));

            card.classList.add("active");

            document
                .getElementById(card.dataset.target)
                .classList.add("active");

        });

    });
    // For mobile

if (window.innerWidth > 768) {

    document.querySelectorAll(".mobile-title").forEach(title => {

        title.addEventListener("click", function () {

            const card = this.closest(".mobile-card");

            card.classList.toggle("active");

        });

    });

}
});