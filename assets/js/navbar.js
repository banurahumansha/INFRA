fetch("components/navbar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data;
         initNavbar();
    });
// Footer
fetch("components/footer.html")
    .then(response => response.text())
    .then(data => {

        document.getElementById("footer").innerHTML = data;

    });

function initNavbar() {

    /*==============================
        NAVBAR SCROLL
    ==============================*/

    const navbar = document.querySelector(".custom-navbar");

    if (navbar) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 50) {

                navbar.classList.add("scrolled");

            } else {

                navbar.classList.remove("scrolled");

            }

        });

    }

    /*==============================
        SOLUTIONS MENU
    ==============================*/

    const mainMenus = document.querySelectorAll(".solution-main");
    const middlePanels = document.querySelectorAll(".middle-panel");

    const middleItems = document.querySelectorAll(".middle-item");
    const detailPanels = document.querySelectorAll(".detail-panel");

    /*------------------------------
        COLUMN 1
    ------------------------------*/

    mainMenus.forEach(menu => {

        menu.addEventListener("mouseenter", () => {

            mainMenus.forEach(m => m.classList.remove("active"));

            middlePanels.forEach(panel => panel.classList.remove("active"));
             detailPanels.forEach(panel => panel.classList.remove("active"));

            menu.classList.add("active");

            const target = menu.dataset.main;
            if(target === "elv"){

    document.getElementById("elv-detail").classList.add("active");

}
            const panel = document.getElementById(target);

            if(panel){

                panel.classList.add("active");

            }

        });

    });

    /*------------------------------
        COLUMN 2
    ------------------------------*/

    middleItems.forEach(item => {

        item.addEventListener("mouseenter", () => {

            middleItems.forEach(i => i.classList.remove("active"));

            detailPanels.forEach(panel => panel.classList.remove("active"));

            item.classList.add("active");

            const target = item.dataset.detail;

            const detail = document.getElementById(target);

            if(detail){

                detail.classList.add("active");

            }

        });

    });

}