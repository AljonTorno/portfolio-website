console.log("SCRIPT.JS LOADED");
/*======================================
    AOS
======================================*/

AOS.init({

    duration:1000,

    once:true

});

/*======================================
    SMOOTH SCROLL
======================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        const target = this.getAttribute("href");

        if (target === "#") return;

        const section = document.querySelector(target);

        if (section) {

            e.preventDefault();

            section.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/*======================================
    ACTIVE NAVBAR
======================================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".navbar-nav .nav-link");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;

        const sectionHeight=section.clientHeight;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")=="#"+current){

            link.classList.add("active");

        }

    });

});

/*======================================
NAVBAR SCROLL
======================================*/

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>60){

        navbar.classList.add("scrolled");

    }

    else{

        navbar.classList.remove("scrolled");

    }

});

/*======================================
AUTO CLOSE MENU
======================================*/

document.querySelectorAll('.nav-link').forEach(link=>{

link.addEventListener('click',()=>{

const nav=document.querySelector('.navbar-collapse');

const bsCollapse=bootstrap.Collapse.getInstance(nav);

if(bsCollapse){

bsCollapse.hide();

}

});

});

/*======================================
    COUNTER ANIMATION
======================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = +counter.dataset.target;

            let current = 0;

            const increment = Math.ceil(target / 60);

            const updateCounter = () => {

                current += increment;

                if (current >= target) {

                    counter.innerHTML = target + "+";

                } else {

                    counter.innerHTML = current + "+";

                    requestAnimationFrame(updateCounter);

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

/*======================================
    HERO TYPING EFFECT
======================================*/

const typingElement = document.getElementById("typing");

const words = [
    "Full Stack Web Developer",
    "Data Analyst",
    "Power BI Developer",
    "Cybersecurity Enthusiast",
    "Engineering Educator"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingElement) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent = currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;

        }

    } else {

        typingElement.textContent = currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 100);

}

document.addEventListener("DOMContentLoaded", typeEffect);


/*======================================
PROJECT MODAL
======================================*/

document.querySelectorAll(".project-view").forEach(button=>{

button.addEventListener("click",function(){

document.getElementById("modalTitle").innerHTML=this.dataset.title;

document.getElementById("modalImage").src=this.dataset.image;

document.getElementById("modalDescription").innerHTML=this.dataset.description;

document.getElementById("modalLive").href=this.dataset.live;

document.getElementById("modalGithub").href=this.dataset.github;

const tags=this.dataset.tags.split(",");

let html="";

tags.forEach(tag=>{

html+=`<span>${tag}</span>`;

});

document.getElementById("modalTags").innerHTML=html;

});

});

const projectModal = document.getElementById('projectModal');

if (projectModal) {

    projectModal.addEventListener('hidden.bs.modal', function () {

        document.activeElement.blur();

    });

}

/*======================================
PROJECT SEARCH + FILTER
======================================*/

const filterButtons = document.querySelectorAll(".filter-btn");

const projectItems = document.querySelectorAll(".project-item");

const searchInput = document.getElementById("projectSearch");

const counter = document.getElementById("projectCounter");

let currentFilter = "all";

function updateProjects(){

    const keyword = searchInput.value.toLowerCase();

    let visible = 0;

    projectItems.forEach(project=>{

        const category = project.dataset.category;

        const title = project.querySelector("h4").textContent.toLowerCase();

        const description = project.querySelector("p").textContent.toLowerCase();

        const matchFilter = currentFilter==="all" || category===currentFilter;

        const matchSearch = title.includes(keyword) || description.includes(keyword);

        if(matchFilter && matchSearch){

            project.style.display="block";

            project.classList.remove("hide");

            project.classList.add("show");

            visible++;

        }

        else{

            project.style.display="none";

        }

    });

    counter.innerHTML=`Showing ${visible} of ${projectItems.length} Projects`;

}

filterButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        filterButtons.forEach(btn=>btn.classList.remove("active"));

        button.classList.add("active");

        currentFilter = button.dataset.filter;

        updateProjects();

    });

});

searchInput.addEventListener("keyup",updateProjects);

updateProjects();

/*======================================
DARK MODE
======================================*/

const themeToggle = document.getElementById("themeToggle");

if(themeToggle){

    if(localStorage.getItem("theme") === "dark"){

        document.body.classList.add("dark");

        themeToggle.innerHTML='<i class="bi bi-sun-fill"></i>';

    }

    themeToggle.addEventListener("click",()=>{

        document.body.classList.toggle("dark");

        if(document.body.classList.contains("dark")){

            localStorage.setItem("theme","dark");

            themeToggle.innerHTML='<i class="bi bi-sun-fill"></i>';

        }

        else{

            localStorage.setItem("theme","light");

            themeToggle.innerHTML='<i class="bi bi-moon-stars-fill"></i>';

        }

    });

}


/*======================================
CERTIFICATE MODAL
======================================*/

document.querySelectorAll(".view-certificate").forEach(button=>{

button.addEventListener("click",function(){

document.getElementById("certificateTitle").innerHTML=this.dataset.title;

document.getElementById("certificateImage").src=this.dataset.image;

document.getElementById("certificateIssuer").innerHTML=this.dataset.issuer;

document.getElementById("certificateDate").innerHTML=this.dataset.date;

document.getElementById("certificateVerify").href=this.dataset.verify;

});

});

/*======================================
BACK TO TOP
======================================*/

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

const   scrollProgress = document.getElementById("scrollProgress");

console.log(scrollProgress);

