// Lets algemeen.
let toggleNavStatus = false;
let toggleLinkStatus = false;
let btn = document.querySelector(".btn-toggle-nav");
let getNavMain = document.querySelector(".nav-main");
let getNavMainUl = document.querySelector(".nav-main ul");
let getNavMainLinks = document.querySelectorAll(".nav-main a");
let getBody = document.querySelector(".body");

// Functie scherm open of dicht

const schermOpen = function () {
  getNavMainUl.style.visibility = "visible";
  getNavMain.style.visibility = "visible";
  let arrayLength = getNavMainLinks.length;
  for (let i = 0; i < arrayLength; i++) {
    getNavMainLinks[i].style.opacity = "1";
  }
};

const schermDicht = function () {
  let arrayLength = getNavMainLinks.length;
  for (let i = 0; i < arrayLength; i++) {
    getNavMainLinks[i].style.opacity = "0";
    getNavMainUl.style.visibility = "hidden";
    getNavMain.style.visibility = "hidden";
  }
};

// Adding eventListeners to the color classes.

const allColors = function () {
  let getGrey = document
    .querySelector(".grey")
    .addEventListener("click", function () {
      schermDicht();
      getBody.style.background = "";
      toggleLinkStatus = false;
    });

  let getRed = document
    .querySelector(".red")
    .addEventListener("click", function () {
      schermDicht();
      getBody.style.background = "red";
      toggleLinkStatus = false;
    });

  let getOrange = document
    .querySelector(".orange")
    .addEventListener("click", function () {
      schermDicht();
      getBody.style.background = "orange";
      toggleLinkStatus = false;
    });

  let getPurple = document
    .querySelector(".purple")
    .addEventListener("click", function () {
      schermDicht();
      getBody.style.background = "purple";
      toggleLinkStatus = false;
    });

  let getGreen = document
    .querySelector(".green")
    .addEventListener("click", function () {
      schermDicht();
      getBody.style.background = "green";
      toggleLinkStatus = false;

      return getGrey, getRed, getOrange, getPurple, getGreen;
    });
};

// Button addEventlistener

btn.addEventListener("click", function () {
  if (toggleLinkStatus === false) {
    toggleNav();
    toggleLinkStatus = true;
  } else if (toggleLinkStatus === true) {
    schermDicht();
    toggleLinkStatus = false;
  }
});

// ToggleNav functie

const toggleNav = function () {
  if (toggleNavStatus === false) {
    schermOpen();
    allColors();
    toggleNavStatus = true;
  } else if (toggleNavStatus === true) {
    schermOpen();
    toggleNavStatus = false;
  }
};

