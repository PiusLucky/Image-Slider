const controls = document.querySelectorAll('.controls');
for(let i=0; i<controls.length; i++){
    controls[i].style.display = 'inline-block';
}

let slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide,2000);

function nextSlide(){
    goToSlide(currentSlide+1);
}

function previousSlide(){
    goToSlide(currentSlide-1);
}

function goToSlide(n){
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide showing';
}


let playing = true;
let pauseButton = document.getElementById('pause');

function pauseSlideshow(){
    pauseButton.innerHTML = '<i class="fas fa-play-circle"></i>'; // play character
    playing = false;
    clearInterval(slideInterval);
}

function playSlideshow(){
    pauseButton.innerHTML = '<i class="fas fa-pause-circle"></i>'; // pause character
    playing = true;
    slideInterval = setInterval(nextSlide,2000);
}

pauseButton.onclick = function(){
    if(playing){ pauseSlideshow(); }
    else{ playSlideshow(); }
};

let next_btn = document.getElementById('next');
let previous_btn = document.getElementById('previous');

next_btn.onclick = function(){
    pauseSlideshow();
    nextSlide();
};
previous_btn.onclick = function(){
    pauseSlideshow();
    previousSlide();
};