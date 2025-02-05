


let index = 0;
const testimonials = document.querySelector('.testimonial-container');
const total = document.querySelectorAll('.testimonial').length;
let startX = 0;
let isDragging = false;
let autoSlide = setInterval(nextTestimonial, 5000);

function resetTimer() {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextTestimonial, 5000);
}

function showTestimonial() {
    testimonials.style.transform = `translateX(${-index * 100}%)`;
    resetTimer();
}

function nextTestimonial() {
    index = (index + 1) % total;
    showTestimonial();
}

function prevTestimonial() {
    index = (index - 1 + total) % total;
    showTestimonial();
}

testimonials.addEventListener('mousedown', (e) => {
    startX = e.clientX;
    isDragging = true;
});

testimonials.addEventListener('mouseup', (e) => {
    if (!isDragging) return;
    let endX = e.clientX;
    if (startX - endX > 50) nextTestimonial();
    if (endX - startX > 50) prevTestimonial();
    isDragging = false;
    resetTimer();
});

testimonials.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
});

testimonials.addEventListener('touchend', (e) => {
    if (!isDragging) return;
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) nextTestimonial();
    if (endX - startX > 50) prevTestimonial();
    isDragging = false;
    resetTimer();
});