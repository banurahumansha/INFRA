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
