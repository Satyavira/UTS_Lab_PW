// Add fade-in animation when in view
document.addEventListener("DOMContentLoaded", function () {
  let fadeIn = document.querySelectorAll(".fade-in");

  function checkVisibility() {
    fadeIn.forEach(function (feature) {
      if (isElementInViewport(feature)) {
        feature.classList.add("is-visible");
      }
      else {
        feature.classList.remove("is-visible");
      }
    });
  }

  function isElementInViewport(el) {
    let rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Check visibility on page load and scroll
  checkVisibility();
  window.addEventListener("scroll", checkVisibility);
});
