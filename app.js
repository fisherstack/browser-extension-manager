const toggles = document.querySelectorAll(".toggle");
const filters = document.querySelectorAll(".filter button");
const cards = document.querySelectorAll(".card");
const removeBtns = document.querySelectorAll(".remove");
const activeFilter = document.querySelector(".filter button[data-active]");
const inactiveFilter = document.querySelector(".filter button[data-inactive]");
const allFilter = document.querySelector(".filter button[data-all]");
const mode = document.querySelector(".mode-switch > img");
let defaultMode = "light";

let currentFilter = allFilter;

const applyFilter = () => {
  const cardsList = Array.from(cards);

  if (currentFilter.hasAttribute("data-all")) {
    cardsList.forEach((card) => {
      card.removeAttribute("style");
    });
  } else if (currentFilter.hasAttribute("data-active")) {
    cardsList.forEach((card) => {
      if (card.querySelector(".toggle[data-toggle-on]")) {
        card.removeAttribute("style");
      } else {
        card.style.display = "none";
      }
    });
  } else {
    cardsList.forEach((card) => {
      if (!card.querySelector(".toggle[data-toggle-on]")) {
        card.removeAttribute("style");
      } else {
        card.style.display = "none";
      }
    });
  }
};
// state of each toggle
toggles.forEach((element) => {
  element.addEventListener("click", () => {
    element.toggleAttribute("data-toggle-on");
    applyFilter();
  });
});

// state of each filter
filters.forEach((btn) => {
  btn.addEventListener("click", () => {
    filters.forEach((filter) => {
      filter.removeAttribute("data-filter-on");
    });
    btn.setAttribute("data-filter-on", "");
    currentFilter = btn;
    applyFilter();
  });
});

// remove cards
removeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card");
    card.remove();
  });
});

/* Dark Mode */
mode.addEventListener("click", () => {
  
    document.body.classList.toggle("dark");
    if (defaultMode === "light") {
        mode.setAttribute("src", "assets/images/icon-sun.svg");
        defaultMode = "dark";
    } else {
        mode.setAttribute("src", "assets/images/icon-moon.svg");
        defaultMode = "light";
    }
});
