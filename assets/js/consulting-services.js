
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

    document.querySelectorAll(".mobile-title").forEach(title => {

    title.addEventListener("click", function(){

        console.log("CLICKED");

        const card = this.closest(".mobile-card");

        console.log("CARD FOUND:", card);

        card.classList.add("active");

        console.log("CLASS:", card.className);

    });

});
document.querySelectorAll(".mobile-title").forEach(btn => {

    btn.addEventListener("click", function(){

        console.log("MOBILE BUTTON CLICKED");

        this.parentElement.classList.toggle("active");

    });

});
});