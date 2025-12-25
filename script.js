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

// Generate Feature Cards
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

document.getElementById("text15").innerHTML = "Our";
document.getElementById("text16").innerHTML = "Lineup";
document.getElementById("text17").innerHTML = "View more";
document.getElementById("text18").innerHTML = "Infinite possibilities. Each machine crafted for a different rider, a different purpose, a different dream.";

const allMotorcycleCards = [{
        model: "3D-model/honda_shadow_rs_2010.glb",
        iosModel: "3D-model/Honda_NR750_1994.usdz",
        name: "APEX R1",
        specs: [
            { icon: "Assets/bolt icon.svg", value: "205 HP" },
            { icon: "Assets/wind icn.svg", value: "118 NM" },
            { icon: "Assets/meter icon.svg", value: "2.9s 0-100" }
        ]
    },
    {
        model: "3D-model/kawashaki_ninja_h2.glb",
        iosModel: "3D-model/Kawashaki_ninja_h2.usdz",
        name: "VORTEX Z900",
        specs: [
            { icon: "Assets/bolt icon.svg", value: "185 HP" },
            { icon: "Assets/wind icn.svg", value: "102 NM" },
            { icon: "Assets/meter icon.svg", value: "3.2s 0-100" }
        ]
    },
    {
        model: "3D-model/ducati motorcycle engine 3d model.glb",
        iosModel: "3D-model/ducati+motorcycle+engine+3d+model.usdz",
        name: "PHANTOM X7",
        specs: [
            { icon: "Assets/bolt icon.svg", value: "195 HP" },
            { icon: "Assets/wind icn.svg", value: "110 NM" },
            { icon: "Assets/meter icon.svg", value: "3.0s 0-100" }
        ]
    },
    {
        model: "3D-model/honda_shadow_rs_2010.glb",
        iosModel: "3D-model/Honda_NR750_1994.usdz",
        name: "THUNDER S1000",
        specs: [
            { icon: "Assets/bolt icon.svg", value: "212 HP" },
            { icon: "Assets/wind icn.svg", value: "125 NM" },
            { icon: "Assets/meter icon.svg", value: "2.7s 0-100" }
        ]
    },
    {
        model: "3D-model/kawashaki_ninja_h2.glb",
        iosModel: "3D-model/Kawashaki_ninja_h2.usdz",
        name: "SONIC MT-09",
        specs: [
            { icon: "Assets/bolt icon.svg", value: "175 HP" },
            { icon: "Assets/wind icn.svg", value: "95 NM" },
            { icon: "Assets/meter icon.svg", value: "3.4s 0-100" }
        ]
    },
    {
        model: "3D-model/ducati motorcycle engine 3d model.glb",
        iosModel: "3D-model/ducati+motorcycle+engine+3d+model.usdz",
        name: "BLAZE RS660",
        specs: [
            { icon: "Assets/bolt icon.svg", value: "165 HP" },
            { icon: "Assets/wind icn.svg", value: "88 NM" },
            { icon: "Assets/meter icon.svg", value: "3.6s 0-100" }
        ]
    },
    {
        model: "3D-model/honda_shadow_rs_2010.glb",
        iosModel: "3D-model/Honda_NR750_1994.usdz",
        name: "NEXUS CBR1000",
        specs: [
            { icon: "Assets/bolt icon.svg", value: "198 HP" },
            { icon: "Assets/wind icn.svg", value: "115 NM" },
            { icon: "Assets/meter icon.svg", value: "3.1s 0-100" }
        ]
    },
    {
        model: "3D-model/kawashaki_ninja_h2.glb",
        iosModel: "3D-model/Kawashaki_ninja_h2.usdz",
        name: "RAPTOR GSX-R750",
        specs: [
            { icon: "Assets/bolt icon.svg", value: "190 HP" },
            { icon: "Assets/wind icn.svg", value: "108 NM" },
            { icon: "Assets/meter icon.svg", value: "3.3s 0-100" }
        ]
    },
    {
        model: "3D-model/ducati motorcycle engine 3d model.glb",
        iosModel: "3D-model/ducati+motorcycle+engine+3d+model.usdz",
        name: "STRIKE ZX-10R",
        specs: [
            { icon: "Assets/bolt icon.svg", value: "200 HP" },
            { icon: "Assets/wind icn.svg", value: "113 NM" },
            { icon: "Assets/meter icon.svg", value: "2.8s 0-100" }
        ]
    },
];

// Changed back to 3 rows with 3 cards each
const rowDistribution = [3, 3, 3];

const section4Div5 = document.querySelector('.section4_div5');
section4Div5.innerHTML = '';

const section4 = document.querySelector('.section4');
let bikeIndex = 0;

rowDistribution.forEach((cardsInRow, rowIndex) => {
    let targetContainer;

    if (rowIndex === 0) {
        targetContainer = section4Div5;
    } else {
        const newSection4Div4 = document.createElement('div');
        newSection4Div4.className = 'section4_div4';
        const newSection4Div5 = document.createElement('div');
        newSection4Div5.className = 'section4_div5';
        newSection4Div4.appendChild(newSection4Div5);
        section4.appendChild(newSection4Div4);
        targetContainer = newSection4Div5;
    }

    for (let i = 0; i < cardsInRow && bikeIndex < allMotorcycleCards.length; i++) {
        const bike = allMotorcycleCards[bikeIndex];
        const card = document.createElement('div');
        card.className = 'card_3d';

        let specsHTML = '';
        bike.specs.forEach(spec => {
            specsHTML += `
                <div class="title_text2">
                    <img class="icon2" src="${spec.icon}" alt="">
                    <h6 class="h6_3">${spec.value}</h6>
                </div>
            `;
        });

        card.innerHTML = `
            <model-viewer class="model" src="${bike.model}" ios-src="${bike.iosModel}" 
                disable-zoom auto-rotate ar ar-modes="webxr scene-viewer quick-look" 
                camera-controls tone-mapping="neutral" poster="poster.webp" shadow-intensity="1">
            </model-viewer>
            <div class="section4_div6">
                <h3 class="prouductcard_text1">${bike.name}</h3>
                <div class="section4_div7">
                    ${specsHTML}
                </div>
                <div class="view_model_button">
                    <h3 class="hero_button_text2">View Model</h3>
                </div>
            </div>
        `;

        targetContainer.appendChild(card);
        bikeIndex++;
    }
});
const paginationDiv = document.createElement('div');
paginationDiv.className = 'pagination';
paginationDiv.innerHTML = `
    <button class="pagination-button prev-button">
        <img class="pagination-arrow left" src="Assets/arrow.svg" alt="Previous">
    </button>
    <div class="pagination-number active">1</div>
    <div class="pagination-number">2</div>
    <div class="pagination-number">3</div>
    <button class="pagination-button next-button">
        <img class="pagination-arrow" src="Assets/arrow.svg" alt="Next">
    </button>
`;
section4.appendChild(paginationDiv);