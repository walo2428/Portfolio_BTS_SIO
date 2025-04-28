document.addEventListener("DOMContentLoaded", () => {
    /* ===== MENU BURGER ===== */
    const burger = document.getElementById("burger");
    const navMenu = document.querySelector("nav ul");
  
    if (burger && navMenu) {
      burger.addEventListener("click", () => {
        navMenu.classList.toggle("show");
        burger.classList.toggle("active");
      });
    }
  
    /* ===== ANIMATION SCROLL (fade-in) ===== */
    const fadeElements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.2 });
  
    fadeElements.forEach(el => observer.observe(el));
  
    /* ===== PROJETS DYNAMIQUES (facultatif) ===== */
    const projectContainer = document.querySelector(".project-container");
    if (projectContainer) {
      const projects = [
        {
          title: "Projet 1",
          description: "Description rapide du projet 1.",
          image: "img/projet1.jpg",
          link: "#"
        },
        {
          title: "Projet 2",
          description: "Description rapide du projet 2.",
          image: "img/projet2.jpg",
          link: "#"
        }
      ];
  
      projects.forEach(project => {
        const card = document.createElement("div");
        card.classList.add("project-card");
  
        card.innerHTML = `
          <img src="${project.image}" alt="${project.title}">
          <div class="project-info">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" class="btn">Voir le projet</a>
          </div>
        `;
  
        card.addEventListener("mouseenter", () => {
          card.style.transform = "scale(1.05)";
        });
        card.addEventListener("mouseleave", () => {
          card.style.transform = "scale(1)";
        });
  
        projectContainer.appendChild(card);
      });
    }
  
    /* ===== ARTICLES VEILLE DYNAMIQUES (facultatif) ===== */
    const articleContainer = document.querySelector(".article-container");
    if (articleContainer) {
      const articles = [
        {
          title: "L’IA en cybersécurité",
          summary: "L’intelligence artificielle transforme la cybersécurité.",
          link: "#"
        },
        {
          title: "5G et infrastructures réseau",
          summary: "Quels impacts pour les entreprises ?",
          link: "#"
        }
      ];
  
      articles.forEach(article => {
        const el = document.createElement("div");
        el.classList.add("veille-article");
        el.innerHTML = `
          <h3>${article.title}</h3>
          <p>${article.summary}</p>
          <a href="${article.link}" class="btn">Lire plus</a>
        `;
        articleContainer.appendChild(el);
      });
    }
  });
  