const processData = [

{
    number:"01 / 05",

    title:"Assess & Plan",

    image:"assets/images/aws/process/assessment.jpg",

    description:
    "We evaluate your existing infrastructure, applications and business objectives to create a secure AWS adoption roadmap.",

    points:[
        "Infrastructure Assessment",
        "Application Discovery",
        "Cloud Readiness Review",
        "Migration Strategy"
    ]
},

{
    number:"02 / 05",

    title:"Cloud Migration",

    image:"assets/images/aws/process/migration.jpg",

    description:
    "Applications, workloads and databases are migrated to AWS with minimal disruption while maintaining security and performance.",

    points:[
        "Application Migration",
        "Database Migration",
        "Zero Downtime Planning",
        "Validation & Testing"
    ]
},

{
    number:"03 / 05",

    title:"Optimize & Modernize",

    image:"assets/images/aws/process/optimize.jpg",

    description:
    "We optimize AWS resources, modernize workloads and improve performance while reducing operational costs.",

    points:[
        "Performance Optimization",
        "Cost Management",
        "Auto Scaling",
        "Resource Optimization"
    ]
},

{
    number:"04 / 05",

    title:"Secure & Govern",

    image:"assets/images/aws/process/security.jpg",

    description:
    "Enterprise security policies, governance frameworks and compliance controls protect every AWS workload.",

    points:[
        "IAM & Access Control",
        "Security Monitoring",
        "Compliance",
        "Backup & Disaster Recovery"
    ]
},

{
    number:"05 / 05",

    title:"Manage & Support",

    image:"assets/images/aws/process/manage.jpg",

    description:
    "Our managed AWS services provide continuous monitoring, optimization and expert support for long-term success.",

    points:[
        "24×7 Monitoring",
        "Incident Response",
        "Managed Operations",
        "Continuous Improvement"
    ]
}

];

const track = document.querySelector(".process-track");
const pagination = document.querySelector(".process-pagination");

let currentSlide = 0;

function buildSlides(){
console.log(track);

    track.innerHTML="";

    pagination.innerHTML="";

    processData.forEach((item,index)=>{

        const slide=document.createElement("div");

        slide.className="process-slide";

        slide.innerHTML=`

            <div class="process-image">

                <img src="${item.image}" alt="${item.title}">

            </div>

            <div class="process-content">

                <span class="process-count">${item.number}</span>

                <h3>${item.title}</h3>

                <p>${item.description}</p>

                <div class="process-list">

                    ${item.points.map(point=>`

                        <div class="process-item">

                            <i class="fa-solid fa-circle-check"></i>

                            <span>${point}</span>

                        </div>

                    `).join("")}

                </div>

            </div>

        `;

        track.appendChild(slide);

        const dot=document.createElement("span");

        if(index===0) dot.classList.add("active");

        dot.addEventListener("click",()=>{

            goToSlide(index);

        });

        pagination.appendChild(dot);

    });

}