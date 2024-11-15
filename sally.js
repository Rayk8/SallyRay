let slideIndex = 0;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");

    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
}

const music = document.getElementById("background-music");

function toggleMusic() {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

window.onload = () => {
    music.volume = 0.2; // Set initial volume level
};

