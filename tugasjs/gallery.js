document.addEventListener("DOMContentLoaded", function() {
    const photos = document.querySelectorAll(".gallery-content img");

    photos.forEach(photo => {
        photo.addEventListener("mouseenter", function() {
            photo.style.transform = "rotate(5deg)";
            photo.style.transition = "transform 0.3s ease";
        });

        photo.addEventListener("mouseleave", function() {
            photo.style.transform = "rotate(0deg)";
        });
    });
});
