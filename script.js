
const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const dots = document.querySelectorAll(".dot");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let currentIndex = 0;

function showSlide(index) {
    if (index >= images.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex = index;
    }

    slides.style.transform =
        `translateX(-${currentIndex * 100}%)`;

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    dots[currentIndex].classList.add("active");
}

next.addEventListener("click", () => {
    showSlide(currentIndex + 1);
});

prev.addEventListener("click", () => {
    showSlide(currentIndex - 1);
});

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        showSlide(index);
    });
});


setInterval(() => {
    showSlide(currentIndex + 1);
}, 5000);
