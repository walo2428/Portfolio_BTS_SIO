/*<<<<<<<<<<<<<<<<<<page accueil>>>>>>>>>>>>>>>>>*/
// Ajout d'une animation au scroll
window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.background = "rgba(51, 51, 51, 0.9)";
    } else {
        header.style.background = "#333";
    }
});

// Effet smooth scroll sur les liens du menu
document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        let targetId = this.getAttribute("href").substring(1);
        let targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 50,
            behavior: "smooth"
        });
    });
});

// Animation du bouton CV au survol
document.querySelector(".btn").addEventListener("mouseover", function () {
    this.style.transform = "scale(1.1)";
    this.style.transition = "transform 0.3s";
});

document.querySelector(".btn").addEventListener("mouseout", function () {
    this.style.transform = "scale(1)";
});



/*<<<<<<<<<<<<<<<<<<page contact>>>>>>>>>>>>>>>>>*/
// Handle form submission
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Votre message a été envoyé avec succès !");
    this.reset();
});

// Add user reviews dynamically
const avisContainer = document.getElementById("avis-container");
const avisList = [
    { name: "Alice", message: "Super portfolio, très bien réalisé !" },
    { name: "Bob", message: "J'adore la présentation et le design !" }
];

function displayAvis() {
    avisContainer.innerHTML = "";
    avisList.forEach(avis => {
        const avisElement = document.createElement("div");
        avisElement.classList.add("avis-item");
        avisElement.innerHTML = `<strong>${avis.name}</strong>: ${avis.message}`;
        avisContainer.appendChild(avisElement);
    });
}

displayAvis();


// J'aime page
document.addEventListener("DOMContentLoaded", () => {
    const likeBtn = document.getElementById("like-btn");
    const dislikeBtn = document.getElementById("dislike-btn");
    const likeCount = document.getElementById("like-count");
    const dislikeCount = document.getElementById("dislike-count");
    let likeCounter = 0;
    let dislikeCounter = 0;
    
    likeBtn.addEventListener("click", () => {
        likeCounter++;
        likeCount.textContent = likeCounter;
        likeBtn.textContent = "✅ Merci";
        likeBtn.style.background = "#cc0000";
        likeBtn.style.transform = "scale(1.1)";
        setTimeout(() => likeBtn.style.transform = "scale(1)", 200);
    });
    
    dislikeBtn.addEventListener("click", () => {
        dislikeCounter++;
        dislikeCount.textContent = dislikeCounter;
        dislikeBtn.textContent = "❌ Merci";
        dislikeBtn.style.background = "#444";
        dislikeBtn.style.transform = "scale(1.1)";
        setTimeout(() => dislikeBtn.style.transform = "scale(1)", 200);
    });
});




/*<<<<<<<<<<<<<<<<<<page projets>>>>>>>>>>>>>>>>>*/
document.addEventListener("DOMContentLoaded", function() {
    // Tableau de projets
    const projects = [
        {
            title: "Projet 1",
            description: "Un résumé du projet 1. Description rapide...",
            image: "projet1.jpg",
            link: "projet1.html"
        },
        {
            title: "Projet 2",
            description: "Un résumé du projet 2. Description rapide...",
            image: "projet2.jpg",
            link: "projet2.html"
        }
    ];

    // Conteneur de projets
    const projectContainer = document.querySelector(".project-container");

    // Créer les cartes pour chaque projet
    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");

        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" class="btn">Voir le projet</a>
            </div>
        `;

        // Ajouter l'événement de survol sur chaque carte
        projectCard.addEventListener("mouseenter", function() {
            projectCard.style.transform = "scale(1.05)";
            projectCard.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.15)";
        });

        projectCard.addEventListener("mouseleave", function() {
            projectCard.style.transform = "scale(1)";
            projectCard.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
        });

        // Ajouter la carte au conteneur
        projectContainer.appendChild(projectCard);
    });
});




/*<<<<<<<<<<<<<<<<<<page veille>>>>>>>>>>>>>>>>>*/
document.addEventListener("DOMContentLoaded", function() {
    const articles = [
        {
            title: "L'importance de la cybersécurité en 2024",
            summary: "Découvrez pourquoi la cybersécurité devient un enjeu majeur cette année...",
            link: "#"
        },
        {
            title: "Les tendances de l'IA pour cette décennie",
            summary: "L'intelligence artificielle transforme nos vies, voici les principales tendances...",
            link: "#"
        }
    ];

    const articleContainer = document.querySelector(".article-container");

    articles.forEach(article => {
        const articleElement = document.createElement("article");
        articleElement.classList.add("veille-article");

        articleElement.innerHTML = `
            <h2>${article.title}</h2>
            <p>${article.summary}</p>
            <a href="${article.link}" class="btn">Lire plus</a>
        `;

        articleContainer.appendChild(articleElement);
    });
});







/*<<<<<<mini burger*/
document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById("burger");
    const navList = document.querySelector("nav ul");

    burger.addEventListener("click", () => {
        navList.classList.toggle("show");
    });
});

