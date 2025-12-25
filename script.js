document.getElementById("text1").innerHTML = "EXPLORE NOW";

const preloader = document.querySelector('.preloader');
if (preloader) {
    window.addEventListener('DOMContentLoaded', function() {
        setTimeout(function() {
            preloader.classList.add('hide');
        }, 500);
    });
}

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

const headerButton = document.querySelector('.header_button');
if (headerButton) {
    headerButton.addEventListener('click', function() {
        window.location.href = 'firstproduct.html';
    });
}

const burgerMenu = document.createElement('div');
burgerMenu.className = 'burger-menu';
burgerMenu.innerHTML = `
    <span></span>
    <span></span>
    <span></span>
`;

const header = document.querySelector('header');
header.appendChild(burgerMenu);

const nav = document.querySelector('nav');

burgerMenu.addEventListener('click', function() {
    burgerMenu.classList.toggle('active');
    nav.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.nav-link, .nav-link-hovered');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        burgerMenu.classList.remove('active');
        nav.classList.remove('active');
    });
});

const heroModels = [{
        model: "3D-model/kawashaki_ninja_h2.glb",
        iosModel: "3D-model/Kawashaki_ninja_h2.usdz"
    },
    {
        model: "3D-model/honda_shadow_rs_2010.glb",
        iosModel: "3D-model/Honda_NR750_1994.usdz"
    },
    {
        model: "3D-model/harley-davidson_flhrxs_road_king_special.glb",
        iosModel: "3D-model/harley-davidson_flhrxs_road_king_special.usdz"
    }
];

let currentHeroIndex = 0;
const heroModelViewer = document.querySelector('.hero_modle');
const heroArrowLeft = document.querySelector('.hero_div1 .arrow_icon_2');
const heroArrowRight = document.querySelector('.hero_div1 .arrow_icon_3');

function updateHeroModel(index) {
    if (heroModelViewer) {
        heroModelViewer.setAttribute('src', heroModels[index].model);
        heroModelViewer.setAttribute('ios-src', heroModels[index].iosModel);
    }
}

if (heroArrowLeft) {
    heroArrowLeft.addEventListener('click', function() {
        currentHeroIndex = (currentHeroIndex - 1 + heroModels.length) % heroModels.length;
        updateHeroModel(currentHeroIndex);
    });
}

if (heroArrowRight) {
    heroArrowRight.addEventListener('click', function() {
        currentHeroIndex = (currentHeroIndex + 1) % heroModels.length;
        updateHeroModel(currentHeroIndex);
    });
}

const helmetProducts = [{
        model: "3D-model/motorcycle_helmet_-_racing_helmet.glb",
        iosModel: "3D-model/motorcycle_helmet_-_racing_helmet.usdz",
        name: "McLaren Helmet",
        description: "with visor plain"
    },
    {
        model: "3D-model/motor_helmet.glb",
        iosModel: "3D-model/Motor_Helmet.usdz",
        name: "Racing Pro Helmet",
        description: "aerodynamic design"
    },
    {
        model: "3D-model/motorcycle_helmet_-_racing_helmet.glb",
        iosModel: "3D-model/motorcycle_helmet_-_racing_helmet.usdz",
        name: "Street Rider Helmet",
        description: "urban style protection"
    },
    {
        model: "3D-model/motor_helmet.glb",
        iosModel: "3D-model/Motor_Helmet.usdz",
        name: "Adventure Helmet",
        description: "off-road ready"
    },
    {
        model: "3D-model/motorcycle_helmet_-_racing_helmet.glb",
        iosModel: "3D-model/motorcycle_helmet_-_racing_helmet.usdz",
        name: "Classic Helmet",
        description: "timeless design"
    }
];

let currentHelmetIndex = 1;
const section1ArrowLeft = document.querySelector('.section1_div3 .arrow_icon_2');
const section1ArrowRight = document.querySelector('.section1_div3 .arrow_icon_3');
const helmetModelViewers = document.querySelectorAll('.helmet_model');
const helmetNameElement = document.getElementById('text6');
const helmetDescElement = document.getElementById('text7');

function updateHelmetDisplay(centerIndex) {
    const prevIndex = (centerIndex - 1 + helmetProducts.length) % helmetProducts.length;
    const nextIndex = (centerIndex + 1) % helmetProducts.length;

    if (helmetModelViewers.length >= 3) {
        helmetModelViewers[0].setAttribute('src', helmetProducts[prevIndex].model);
        helmetModelViewers[0].setAttribute('ios-src', helmetProducts[prevIndex].iosModel);

        helmetModelViewers[1].setAttribute('src', helmetProducts[centerIndex].model);
        helmetModelViewers[1].setAttribute('ios-src', helmetProducts[centerIndex].iosModel);

        helmetModelViewers[2].setAttribute('src', helmetProducts[nextIndex].model);
        helmetModelViewers[2].setAttribute('ios-src', helmetProducts[nextIndex].iosModel);
    }

    if (helmetNameElement) {
        helmetNameElement.innerHTML = helmetProducts[centerIndex].name;
    }
    if (helmetDescElement) {
        helmetDescElement.innerHTML = helmetProducts[centerIndex].description;
    }
}

updateHelmetDisplay(currentHelmetIndex);

if (section1ArrowLeft) {
    section1ArrowLeft.addEventListener('click', function() {
        currentHelmetIndex = (currentHelmetIndex - 1 + helmetProducts.length) % helmetProducts.length;
        updateHelmetDisplay(currentHelmetIndex);
    });
}

if (section1ArrowRight) {
    section1ArrowRight.addEventListener('click', function() {
        currentHelmetIndex = (currentHelmetIndex + 1) % helmetProducts.length;
        updateHelmetDisplay(currentHelmetIndex);
    });
}

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
        description: "Pure Performance Unleashed",
        price: "$22,250",
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
        description: "Speed Meets Precision",
        price: "$19,750",
        specs: [
            { icon: "Assets/bolt icon.svg", value: "185 HP" },
            { icon: "Assets/wind icn.svg", value: "102 NM" },
            { icon: "Assets/meter icon.svg", value: "3.2s 0-100" }
        ]
    },
    {
        model: "3D-model/harley-davidson_flhrxs_road_king_special.glb",
        iosModel: "3D-model/harley-davidson_flhrxs_road_king_special.usdz",
        name: "PHANTOM X7",
        description: "Unleash The Beast Within",
        price: "$21,500",
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
        description: "Raw Power Redefined",
        price: "$24,900",
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
        description: "Agile Street Dominator",
        price: "$17,250",
        specs: [
            { icon: "Assets/bolt icon.svg", value: "175 HP" },
            { icon: "Assets/wind icn.svg", value: "95 NM" },
            { icon: "Assets/meter icon.svg", value: "3.4s 0-100" }
        ]
    },
    {
        model: "3D-model/harley-davidson_flhrxs_road_king_special.glb",
        iosModel: "3D-model/harley-davidson_flhrxs_road_king_special.usdz",
        name: "BLAZE RS660",
        description: "Lightweight Performance",
        price: "$16,500",
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
        description: "Track-Ready Excellence",
        price: "$20,750",
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
        description: "Balanced Perfection",
        price: "$18,900",
        specs: [
            { icon: "Assets/bolt icon.svg", value: "190 HP" },
            { icon: "Assets/wind icn.svg", value: "108 NM" },
            { icon: "Assets/meter icon.svg", value: "3.3s 0-100" }
        ]
    },
    {
        model: "3D-model/harley-davidson_flhrxs_road_king_special.glb",
        iosModel: "3D-model/harley-davidson_flhrxs_road_king_special.usdz",
        name: "STRIKE ZX-10R",
        description: "Supercharged Supremacy",
        price: "$23,250",
        specs: [
            { icon: "Assets/bolt icon.svg", value: "200 HP" },
            { icon: "Assets/wind icn.svg", value: "113 NM" },
            { icon: "Assets/meter icon.svg", value: "2.8s 0-100" }
        ]
    },
];

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
        const currentIndex = bikeIndex;
        const card = document.createElement('div');
        card.className = 'card_3d';
        card.style.cursor = 'pointer';

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

        card.addEventListener('click', function() {
            localStorage.setItem('selectedProduct', JSON.stringify(allMotorcycleCards[currentIndex]));
            window.location.href = 'firstproduct.html';
        });

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

document.getElementById("text19").innerHTML = "TAYVO";
document.getElementById("text20").innerHTML = "Join thousands of riders who have chosen excellence. Experience the revolution.";
document.getElementById("text21").innerHTML = "TAYVO";
document.getElementById("text22").innerHTML = "Engineering excellence since 2010. Redefining the art of motorcycle performance.";
document.getElementById("text23").innerHTML = "MODELS";
document.getElementById("text24").innerHTML = "Sport Bikes";
document.getElementById("text25").innerHTML = "Cruisers";
document.getElementById("text26").innerHTML = "Touring";
document.getElementById("text27").innerHTML = "Adventure";
document.getElementById("text28").innerHTML = "Electric";
document.getElementById("text29").innerHTML = "SUPPORT";
document.getElementById("text30").innerHTML = "Owner Resources";
document.getElementById("text31").innerHTML = "Manuals";
document.getElementById("text32").innerHTML = "Warranty";
document.getElementById("text33").innerHTML = "Service Centers";
document.getElementById("text34").innerHTML = "FAQ";
document.getElementById("text35").innerHTML = "COMPANY";
document.getElementById("text36").innerHTML = "About Us";
document.getElementById("text37").innerHTML = "Careers";
document.getElementById("text38").innerHTML = "Press";
document.getElementById("text39").innerHTML = "Sustainability";
document.getElementById("text40").innerHTML = "Contact";