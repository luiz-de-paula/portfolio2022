const navMenu = document.getElementById("nav_menu")
const navToggle = document.getElementById("nav_toggle")
const navClose = document.getElementById("nav_close")

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show_menu")
  })
}
if (nav_close) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show_menu")
  })
}

// remover menu mobile

const navLink = document.querySelectorAll(".nav_link")
function linkAction() {
  const navMenu = document.getElementById("nav_menu")
  // quando clicar em cada nav_link, nós removemos a classe show menu
  navMenu.classList.remove("show_menu")
}
navLink.forEach(n => n.addEventListener("click", linkAction))

// recolher as habilidades
const skillsContent = document.getElementsByClassName("skills_content"),
  skillsHeader = document.querySelectorAll(".skills_header")

function toggleSkills() {
  let itemClass = this.parentNode.className

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills_content skills_close"
  }
  if (itemClass === "skills_content skills_close") {
    this.parentNode.className = "skills_content skills_open"
  }
}
skillsHeader.forEach(e => {
  e.addEventListener("click", toggleSkills)
})

const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]")

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach(tabContent => {
      tabContent.classList.remove("qualification_active")
    })
    target.classList.add("qualification_active")

    tab.forEach(tab => {
      tab.classList.remove("qualification_active")
    })
    tab.classList.add("qualification_active")
  })
})

// services modal

const modalViews = document.querySelectorAll(".services_modal"),
  modalBtns = document.querySelectorAll(".services_buttom"),
  modalCloses = document.querySelectorAll(".services_modal-close")

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal")
}

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i)
  })
})
modalCloses.forEach(modalClose => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach(modalView => {
      modalView.classList.remove("active-modal")
    })
  })
})

// swiper slide

let swiper = new Swiper(".portfolio_container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-buttom-next",
    prevEl: ".swiper-buttom-prev"
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
})

// scrool section active link
const sections = document.querySelectorAll("section[id]")

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50

    sectionId = current.getAttribute("id")

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav_menu a[href* = " + sectionId + "]")
        .classList.add("active-link")
    } else {
      document
        .querySelector(".nav_menu a[href* = " + sectionId + "]")
        .classList.remove("active-link")
    }
  })
}
window.addEventListener("scroll", scrollActive)

// backgroud header

function scrollHeader() {
  const nav = document.getElementById("header")

  if (this.scrollY >= 80) nav.classList.add("scroll-header")
  else nav.classList.remove("scroll-header")
}
window.addEventListener("scroll", scrollHeader)

// Show scroll up
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up")

  if (this.scrollY >= 1260) scrollUp.classList.add("show-scroll")
  else scrollUp.classList.remove("show-scroll")
}
window.addEventListener("scroll", scrollUp)
