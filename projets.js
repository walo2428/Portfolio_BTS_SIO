// --- Filtre projets ---
const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".project-card-wrapper");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    cards.forEach(card => {
      const category = card.getAttribute("data-category");

      if (filter === "all" || category === filter) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }
    });
  });
});

// --- Détails déroulants ---
document.querySelectorAll(".btn-details").forEach(btn => {
  btn.addEventListener("click", () => {
    const details = btn.parentElement.parentElement.querySelector(".details-box");

    if (details.style.display === "block") {
      details.style.display = "none";
      btn.textContent = "Détails";
    } else {
      details.style.display = "block";
      btn.textContent = "Fermer";
    }
  });
});
