document.getElementById("text1").innerHTML = "EXPLORE NOW";

// Pre Loader Script 
window.addEventListener('DOMContentLoaded', function() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        setTimeout(function() {
            preloader.classList.add('hide');
        }, 500);
    }
});

document.getElementById("text2").innerHTML = "Read More";
document.getElementById("text3").innerHTML = "Always stay";
document.getElementById("text4").innerHTML = "Safe";
document.getElementById("text5").innerHTML = "Premium helmets built for confidence on every road.";
document.getElementById("text6").innerHTML = "McLaren Helmet";
document.getElementById("text7").innerHTML = "with visor plain";
document.getElementById("text8").innerHTML = "View more";