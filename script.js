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