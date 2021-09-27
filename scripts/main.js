var dotContainer = document.getElementById("dot-container");
dotContainer.innerHTML += `<span class="dot" onclick="currentSlide(1)"></span>`;
dotContainer.innerHTML += `<span class="dot" onclick="currentSlide(2)"></span>`;
dotContainer.innerHTML += `<span class="dot" onclick="currentSlide(3)"></span>`;


var slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("my-slides");
    var dots = document.getElementsByClassName("dot");

    // if n = 0, set to last slide (since first slide is 1)
    if(n < 1) {
        slideIndex = slides.length;
    }

    if(n > slides.length) {
        slideIndex = 1;
    }

    // Hides the slides
    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Changes the dots 
    for(let j = 0; j < dots.length; j++) {
        dots[j].className = dots[j].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

showSlides(slideIndex);