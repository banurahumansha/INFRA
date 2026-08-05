/*=========================================
    DATA & AI SOLUTION MATRIX
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    const tabs = document.querySelectorAll(".sm-tab");
    const panels = document.querySelectorAll(".sm-panel");

    tabs.forEach(tab => {

        tab.addEventListener("click", () => {

            const target = tab.dataset.target;

            /* Remove Active */

            tabs.forEach(item =>
                item.classList.remove("active")
            );

            panels.forEach(panel => {
                panel.classList.remove("active");
            });

            /* Activate Selected */

            tab.classList.add("active");

            const activePanel =
                document.getElementById(target);

            activePanel.classList.add("active");

        });

    });

});