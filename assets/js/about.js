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

const data = {

cloud:{
image:"assets/images/icon/cloud.png",

title:"Cloud & Infrastructure",
focus:[
"Hybrid Cloud Orchestration",
"Cloud Migration",
"Cloud Native Engineering"
],
impact:[
"Zero-disruption migrations",
"Optimized resource allocation",
"Elastic auto-scaling environments"
]
},

digital:{
image:"assets/images/icon/digital.jpg",

title:"Digital Transformation",
focus:[
"Application Modernization",
"Custom Software Development",
"API Integrations"
],
impact:[
"Modernized legacy systems",
"Streamlined workflows",
"Seamless interoperability"
]
},

security:{
image:"assets/images/icon/security.jpg",

title:"Enterprise Security",
focus:[
"Layered Cybersecurity",
"Identity & Access Management",
"Continuous Monitoring"
],
impact:[
"Threat mitigation",
"Identity access management",
"Global industry compliance"
]
},

managed:{
image:"assets/images/icon/managed.jpg",

title:"Managed IT Services",
focus:[
"24/7/365 Infrastructure Support",
"Automated Monitoring",
"Preventive Maintenance"
],
impact:[
"Proactive fault detection",
"Reduced Total Cost of Ownership",
"Continuous optimization"
]
}

};
const details = document.getElementById("details-content");
const cards = document.querySelectorAll(".capability");

function loadContent(key){

    const item = data[key];
details.style.opacity = 1;
details.style.transform = "translateY(0)";
    setTimeout(()=>{

        details.innerHTML = `
    <img src="${item.image}" class="details-illustration">

            <h3>${item.title}</h3>

            <h4>Focus Areas</h4>
            <ul>
                ${item.focus.map(x=>`<li>${x}</li>`).join("")}
            </ul>

            <h4>Business Impact</h4>
            <ul>
                ${item.impact.map(x=>`<li>${x}</li>`).join("")}
            </ul>
        `;

        details.style.opacity = 1;
        details.style.transform = "translateY(0)";

    },150);

}

loadContent("cloud");
let hoverTimer;
cards.forEach(card=>{

    function activate(){

        cards.forEach(c=>c.classList.remove("active"));

        card.classList.add("active");

        loadContent(card.dataset.target);

    }

    // Desktop
  card.addEventListener("mouseenter", () => {

        clearTimeout(hoverTimer);

        hoverTimer = setTimeout(activate, 150);

    });
      card.addEventListener("mouseleave", () => {

        clearTimeout(hoverTimer);

    });
    // Mobile
    card.addEventListener("click", activate);

});