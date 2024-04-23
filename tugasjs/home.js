document.addEventListener("DOMContentLoaded", function() {
    var textElements = document.querySelectorAll(".content h2, .content p");
    textElements.forEach(function(element, index) {
      element.style.animationDelay = (index * 1) + "s";
      element.classList.add("animated");
    });
  });
  