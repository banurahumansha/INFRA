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

    /*==============================*
     * NAVBAR SCROLL
     *==============================*/

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

    /*==============================*
     * MEGA MENU V2
     *==============================*/

    const mmTabs = document.querySelectorAll(".mm-category");
    const mmLeftPanels = document.querySelectorAll(".mm-left-panel");
    const mmRightPanels = document.querySelectorAll(".mm-right-panel");

    if (mmTabs.length) {

        mmTabs.forEach(tab => {

            tab.addEventListener("mouseenter", function () {

                const target = this.dataset.target;

                // Active tab
                mmTabs.forEach(t => t.classList.remove("mm-active"));
                this.classList.add("mm-active");

                // Hide left panels
                mmLeftPanels.forEach(panel => {
                    panel.classList.remove("mm-active");
                });

                // Show selected left panel
                const left = document.getElementById(target + "-left");
                if (left) {
                    left.classList.add("mm-active");
                }

                // Hide right panels
                mmRightPanels.forEach(panel => {
                    panel.classList.remove("mm-active");
                });

                // Show selected right panel
                const right = document.getElementById(target + "-right");
                if (right) {
                    right.classList.add("mm-active");
                }

            });

        });

    }

}