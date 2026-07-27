const cloudData = {

   aws: {

    title:"Amazon Web Services",

    image:"assets/images/multi-cloud/aws-card.jpg",


    description:
    "Accelerating enterprise workloads with secure, scalable and optimized AWS cloud solutions — from migration and modernization to AI-driven innovation.",


    features:[

        "Microsoft Workloads on AWS (SQL Server, AD, .NET)",

        "SAP on AWS with agility, cost savings & scalability",

        "High-Performance Tally on AWS",

        "AWS Media Services (OTT & live streaming delivery)",

        "Tally on AWS (high-availability cloud ERP access)",

        "Next Gen Data & AI, Cybersecurity & Resilience Services on AWS"

    ]

},
    azure: {

    title:"Microsoft Azure",

    image:"assets/images/multi-cloud/azure-card.jpg",


    description:
    "Driving enterprise transformation with Azure cloud platforms, intelligent data services, secure digital workplaces and modern application innovation.",


    features:[

        "Data, Analytics & Generative AI",

        "Microsoft Powered Security (XDR, Zero Trust & Microsoft-powered SOC)",

        "App Innovation & AKS Modernization",

        "Cloud Infra & Intelligent DevOps Automation",

        "Microsoft 365 & Power Platform Solutions",

        "Modern Work, VDI & Managed Digital Workspaces"

    ]

},


 gcp: {

    title:"Google Cloud Platform",

    image:"assets/images/multi-cloud/gcp-card.jpg",


    description:
    "Accelerating digital innovation with Google Cloud solutions across data analytics, AI, application modernization and intelligent cloud operations.",


    features:[

        "Serverless Warehousing & Data Analytics",

        "Container Modernization & Hyperscalable Serverless Workloads",

        "Vertex AI & Advanced Gemini Acceleration",

        "Cloud Build, Cloud Deploy & DevOps Automation",

        "Intelligent DevOps & Continuous Delivery",

        "Anthos Hybrid Cloud Operations & Modern Workspace Integration"

    ]

},


    ibm: {

    title:"IBM Cloud + Hybrid",

    image:"assets/images/multi-cloud/ibm-card.png",


    description:
    "Enabling enterprise hybrid cloud transformation with OpenShift, AI platforms, mission-critical infrastructure, and secure governance solutions.",


    features:[

        "Enterprise Managed OpenShift on IBM Cloud",

        "IBM watsonx, Data, AI & Governance Platform",

        "IBM Power Virtual Server for Mission-Critical Workloads",

        "IBM Cloud for Financial Services",

        "Red Hat AI InstructLab",

        "Cloud Security & Compliance Center + IBM X-Force"

    ]

},

    oracle: {

    title:"Oracle Cloud Infrastructure",

    image:"assets/images/multi-cloud/oracle-card1.jpg",


    description:
    "Powering mission-critical enterprise workloads with high-performance cloud infrastructure, autonomous databases, AI innovation and secure hybrid cloud operations.",


    features:[

        "Oracle Exadata Cloud Infrastructure & Autonomous Database",

        "OCI Generative AI & LLM-Powered Enterprise Automation",

        "High-Performance Compute: OKE · Bare Metal · GPU",

        "Multi-Cloud Architecture: Oracle Database for Azure & Google",

        "Sovereign Cloud Infrastructure & Hybrid Network Operations",

        "FastConnect Private Network & OCI DevOps CI/CD Pipelines"

    ]

},

};
const cards = document.querySelectorAll(".cloud-platform-card");

const content = document.querySelector(".cloud-content");

const cloudImage = document.querySelector(".cloud-content-media img");

const cloudTitle = content.querySelector("h3");

const cloudDescription = content.querySelector("p");

const cloudTags = content.querySelector(".cloud-tags");

const cloudFeatures = content.querySelector(".cloud-feature-grid");



cards.forEach(card=>{


    card.addEventListener("click",()=>{


        let cloud = card.dataset.cloud;


        let data = cloudData[cloud];


        if(!data) return;



        // Remove active glow

        cards.forEach(c=>{

            c.classList.remove("active");

        });



        // Add active glow

        card.classList.add("active");





        // Change cloud image

        cloudImage.style.opacity = "0";


        setTimeout(()=>{


            cloudImage.src = data.image;

            cloudImage.alt = data.title;


            cloudImage.style.opacity = "1";


        },200);






        // Change title

        cloudTitle.textContent = data.title;





        // Change description

        cloudDescription.textContent = data.description;






        // Change tags

        if(data.tags){

            cloudTags.innerHTML = data.tags.map(tag=>`

                <span>
                    ${tag}
                </span>

            `).join("");

        }







        // Change features

        cloudFeatures.innerHTML = data.features.map(item=>`

            <div>
                ${item}
            </div>

        `).join("");



    });


});


const cloudPillars = document.querySelectorAll(".cloud-pillar");


const pillarObserver = new IntersectionObserver(
(entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("show");


        }


    });


},
{
    threshold:0.2
});



cloudPillars.forEach(pillar=>{

    pillarObserver.observe(pillar);

});


const modernization = document.querySelector(".modernization-content");


const modernizationObserver = new IntersectionObserver(
(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},
{
    threshold:0.25
});


if(modernization){

    modernizationObserver.observe(modernization);

}

// Overview

const mcloudOverview =
document.querySelector(".mcloud-overview-content");


const overviewObserver = new IntersectionObserver(
(entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }


    });


},
{
    threshold:0.2
});


if(mcloudOverview){

    overviewObserver.observe(mcloudOverview);

}


// Cloud -ecosystem


const featureGrid = document.querySelector(".cloud-feature-grid");


const featureObserver = new IntersectionObserver(
(entries)=>{

    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("animate");


            featureObserver.unobserve(entry.target);


        }


    });

},
{
    threshold:0.3
});


if(featureGrid){

    featureObserver.observe(featureGrid);

}