/* Toggle Menu */
const navOpenMenu = document.getElementById("nav-open");
const navCLoseMenu = document.getElementById("nav-close");
const navMenu = document.getElementById("nav-menu");

const openMenu = () => {
  navMenu.classList.add("show__menu");
};
const closeMenu = () => {
  navMenu.classList.remove("show__menu");
};

navOpenMenu.addEventListener("click", openMenu);
navCLoseMenu.addEventListener("click", closeMenu);

/* Hide Menu When Link Clicked */
const menuList = document.querySelectorAll(".nav__link");

menuList.forEach((menu) => menu.addEventListener("click", closeMenu));

/* Skills Modal */
const modalViews = document.querySelectorAll(".skills__modal");
const modalButtons = document.querySelectorAll(".skills__button");
const modalCloses = document.querySelectorAll(".skills__modal-close");

const modalFunction = (modalIndex, modalCommand) => {
  modalCommand === "open"
    ? modalViews[modalIndex].classList.add("active-modal")
    : modalViews[modalIndex].classList.remove("active-modal");
};

modalButtons.forEach((btn, i) =>
  btn.addEventListener("click", () => {
    modalFunction(i, "open");
  })
);

modalCloses.forEach((btn, i) =>
  btn.addEventListener("click", () => {
    modalFunction(i, "close");
  })
);

/* Swiper Portfolio */
let swiper = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});

/* Copy Email */
const emailButton = document.getElementById("email-button");
const emailNameText = document.getElementById("email-name");
const emailTooltipText = document.getElementById("email-tooltip");
const emailCopiedText = document.getElementById("email-copied");

emailButton.addEventListener("mouseenter", () => {
  emailNameText.classList.add("hide-text");
  if (emailTooltipText.classList.contains("hide-text")) {
    emailTooltipText.classList.remove("hide-text");
  }
  emailTooltipText.classList.add("show-text");
});

emailButton.addEventListener("mouseleave", () => {
  emailNameText.classList.remove("hide-text");
  emailTooltipText.classList.remove("show-text");
  emailCopiedText.classList.remove("show-text");
});

emailButton.addEventListener("click", () => {
  navigator.clipboard.writeText("nehan.co@gmail.com");

  emailCopiedText.classList.add("show-text");
  emailTooltipText.classList.add("hide-text");
});

/* Scroll Sections Active Link */
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const curentScrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (
      curentScrollY > sectionTop &&
      curentScrollY <= sectionTop + sectionHeight
    ) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "")
        .classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

/* Change Background Header */
const scrollHeader = () => {
  const nav = document.getElementById("header");

  if (this.scrollY >= 80) {
    nav.classList.add("scroll-header");
  } else {
    nav.classList.remove("scroll-header");
  }
};

window.addEventListener("scroll", scrollHeader);

/* Scroll Top */
const scrollUp = () => {
  const scrollButton = document.getElementById("scroll-up");

  if (this.scrollY >= 560) {
    scrollButton.classList.add("show-scroll");
  } else {
    scrollButton.classList.remove("show-scroll");
  }
};

window.addEventListener("scroll", scrollUp);

/* Dark Theme */
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const gerCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const gerCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", gerCurrentTheme());
  localStorage.setItem("selected-icon", gerCurrentIcon());
});
