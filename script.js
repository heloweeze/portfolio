// ====================================================
// COMPORTEMENT DU NAV MENU COOKIE FLOTTANT AU SCROLL
// ====================================================
const cookieTrigger = document.getElementById("cookie-menu-trigger");
const cookieOverlay = document.getElementById("cookie-overlay");

window.addEventListener("scroll", () => {
    // Si on descend de plus de 300px, on fait pop le bouton Cookie
    if (window.scrollY > 300) {
        cookieTrigger.classList.add("show");
    } else {
        cookieTrigger.classList.remove("show");
        // Referme aussi le menu si l'utilisateur remonte tout en haut
        cookieOverlay.classList.remove("open");
    }
});

// Fonction déclenchée au clic sur le cookie pour afficher/masquer le menu
function toggleCookieMenu() {
    cookieOverlay.classList.toggle("open");
}

// =========================
// POPUP MON UNIVERS
// =========================
const widgets = document.querySelectorAll(".widget");
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popupTitle");
const popupText = document.getElementById("popupText");
const closePopup = document.getElementById("closePopup");

const data = {
    "Football": "Le sport et plus particulièrement le football m'a permise de développer l'esprit d'équipe, la persévérance et la discipline. Une pratique qui m'accompagne depuis plusieurs années et qui m'a apprise à être souder avec les autres.",
    "Gaming": "Les jeux vidéo développe ma communication, ma réactivité et ma capacité d'adaptation. J'ai également créé une communauté Discord afin de rassembler des joueurs autour de centres d'intérêt communs.",
    "Cinéma": "J'ai participée au Jury Écran Jeunes Internationale et j'ai un intérêt pour le cinéma, les séries et la narration visuelle. J'apprécie comprendre comment une histoire est construite et transmise.",
    "Musique": "J'ai pratiquée du cor et du violoncelle avec plusieurs représentations publiques en classe orchestre. Une expérience qui m'a appris la rigueur, l'écoute et le travail collectif.",
    "Voyage": "Découvrir de nouveaux lieux, de nouvelles cultures et de nouvelles personnes est une source constante d'apprentissage et d'ouverture d'esprit."
};

widgets.forEach(widget => {
    widget.addEventListener("click", () => {
        const key = widget.getAttribute("data-name");
        
        popup.style.display = "flex";
        popupTitle.textContent = key;
        popupText.textContent = data[key] || "Informations à venir...";
    });
});

closePopup.addEventListener("click", () => {
    popup.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});

// =========================
// FONCTION REVELATION IMAGE
// =========================
function toggleReveal(id) {
    const element = document.getElementById(id);
    if (element) {
        element.classList.add('revealed');
    }
}