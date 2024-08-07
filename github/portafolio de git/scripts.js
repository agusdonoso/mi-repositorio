// scripts.js

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', () => {
    moveToSlide(currentIndex + 1);
});

document.querySelector('.prev').addEventListener('click', () => {
    moveToSlide(currentIndex - 1);
});

function moveToSlide(index) {
    if (index < 0) {
        index = totalSlides - 1;
    } else if (index >= totalSlides) {
        index = 0;
    }
    const newTransform = `translateX(-${index * 100}%)`;
    document.querySelector('.slides').style.transform = newTransform;
    currentIndex = index;
}