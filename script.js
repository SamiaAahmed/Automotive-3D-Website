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
document.getElementById("text9").innerHTML = "Engine";
document.getElementById("text10").innerHTML = "Breakdown";
document.getElementById("text11").innerHTML = "A detailed look at the components that drive performance.";
document.getElementById("text12").innerHTML = "CUTTING-EDGE";
document.getElementById("text13").innerHTML = "TECH";
document.getElementById("text14").innerHTML = "Advanced technology to enhance your riding experience.";

// Feature Cards
const featureCards = [{
        icon: "Assets/safety icon.svg",
        title: "SAFETY",
        features: [
            "Cornering ABS with lean angle detection",
            "Wheelie control for enhanced stability",
            "Blind spot monitoring system",
            "Adaptive headlight technology",
            "Emergency brake light activation"
        ]
    },
    {
        icon: "Assets/power icon.svg",
        title: "PERFORMANCE",
        features: [
            "Variable valve timing for optimal power delivery",
            "Quick shifter with auto-blipper technology",
            "Multi-mode traction control system",
            "Launch control for perfect starts",
            "Electronic suspension adjustment"
        ]
    },
    {
        icon: "Assets/wifi icon.svg",
        title: "CONNECTIVITY",
        features: [
            "Full-color TFT display with smartphone integration",
            "Turn-by-turn navigation system",
            "Bluetooth music streaming",
            "Call and message notifications",
            "Over-the-air software updates"
        ]
    }
];

// Cards
const section3Div1 = document.querySelector('.section3_div1');
section3Div1.innerHTML = '';

featureCards.forEach(card => {
    const featureCard = document.createElement('div');
    featureCard.className = 'feature_card';

    let featuresHTML = '';
    card.features.forEach(feature => {
        featuresHTML += `
            <div class="section3_div4">
                <div class="circle"></div>
                <h6>${feature}</h6>
            </div>
        `;
    });

    featureCard.innerHTML = `
        <div class="section3_div2">
            <img class="section3_icon" src="${card.icon}" alt="${card.title}">
            <h5>${card.title}</h5>
            ${featuresHTML}
        </div>
    `;

    section3Div1.appendChild(featureCard);
});