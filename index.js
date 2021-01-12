// creating an object with elements to be modified in night mode
const keyElements = {
  html: document.querySelector("html"),
  nightToggleButton: document.querySelector(".lucky-button"),
  links: document.querySelectorAll("a"),
  appsImage: document.querySelector(".google-apps"),
  footer: document.querySelector(".footer"),
};

// checking if the site is in night mode
const isNight = () => keyElements.html.classList.contains("night");

// adding or removing night css styling
function setNight(night) {
  if (night) {
    keyElements.html.classList.add("night");
    keyElements.nightToggleButton.textContent = "I'm Feeling Bright";
    keyElements.links.forEach(function (link) {
      link.classList.add("night");
    });
    keyElements.appsImage.classList.add("night");
    keyElements.footer.classList.add("night");
  } else {
    keyElements.html.classList.remove("night");
    keyElements.nightToggleButton.textContent = "I'm Feeling Lucky";
    keyElements.links.forEach(function (link) {
      link.classList.remove("night");
    });
    keyElements.appsImage.classList.remove("night");
    keyElements.footer.classList.remove("night");
  }
}

// switch to night mode or day mode
function toggleNight() {
  setNight(!isNight());
}

// adding a click event listener to the nightToggleButton
document.addEventListener("DOMContentLoaded", () => {
  keyElements.nightToggleButton.addEventListener("click", toggleNight);
});
