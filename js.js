let slideIndex = 1;
let autoSlide = setInterval(autoSlideChange, 5000);
showSlides(slideIndex);


function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.querySelectorAll('.mySlides');
    let dots = document.querySelectorAll('.dot');

    if (n > slides.length) { slideIndex = 1 };
    if (n < 1) { slideIndex = slides.length };

    slides.forEach(slide => slide.style.display = 'none');
    dots.forEach(dot => dot.classList.remove('active'));

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active');

    clearInterval(autoSlide);
    autoSlide = setInterval(autoSlideChange, 5000);
}

function autoSlideChange() {
    slideIndex += 1;
    showSlides(slideIndex);
}