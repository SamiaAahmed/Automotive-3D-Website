const productData = JSON.parse(localStorage.getItem('selectedProduct')) || {
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
};

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

document.getElementById("text1").innerHTML = "Similar Products";
document.getElementById("text2").innerHTML = "View more";

const similarProducts = [{
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
    }
];

const section6_2 = document.querySelector('.section6_2');

const productsContainer = document.createElement('div');
productsContainer.className = 'section4_div4';

const productsRow = document.createElement('div');
productsRow.className = 'section4_div5';

similarProducts.forEach((product, index) => {
    const card = document.createElement('div');
    card.className = 'card_3d';
    card.style.cursor = 'pointer';

    let specsHTML = '';
    product.specs.forEach(spec => {
        specsHTML += `
            <div class="title_text2">
                <img class="icon2" src="${spec.icon}" alt="">
                <h6 class="h6_3">${spec.value}</h6>
            </div>
        `;
    });

    card.innerHTML = `
        <model-viewer class="model" src="${product.model}" ios-src="${product.iosModel}" 
            disable-zoom auto-rotate ar ar-modes="webxr scene-viewer quick-look" 
            camera-controls tone-mapping="neutral" poster="poster.webp" shadow-intensity="1">
        </model-viewer>
        <div class="section4_div6">
            <h3 class="prouductcard_text1">${product.name}</h3>
            <div class="section4_div7">
                ${specsHTML}
            </div>
            <div class="view_model_button">
                <h3 class="hero_button_text2">View Model</h3>
            </div>
        </div>
    `;

    card.addEventListener('click', function() {
        localStorage.setItem('selectedProduct', JSON.stringify(product));
        window.location.href = 'firstproduct.html';
    });

    productsRow.appendChild(card);
});

productsContainer.appendChild(productsRow);
section6_2.appendChild(productsContainer);

document.getElementById("text3").innerHTML = productData.name;
document.getElementById("text4").innerHTML = productData.description;
document.getElementById("text5").innerHTML = productData.price;
document.getElementById("text6").innerHTML = "Available Colors";
document.getElementById("text7").innerHTML = "Midnight Black";
document.getElementById("text8").innerHTML = "Pearly White";
document.getElementById("text9").innerHTML = "Racing Red";
document.getElementById("text10").innerHTML = "Reserve";
document.getElementById("text20").innerHTML = productData.specs[0].value;
document.getElementById("text21").innerHTML = productData.specs[1].value;
document.getElementById("text22").innerHTML = productData.specs[2].value;

const section1_2_div1 = document.querySelector('.section1-2_div1');

const modelContainer = document.createElement('div');
modelContainer.className = 'product_model_container';
modelContainer.innerHTML = `
    <model-viewer id="product_model" class="product_detail_model" src="${productData.model}" ios-src="${productData.iosModel}" 
        ar ar-modes="webxr scene-viewer quick-look" camera-controls disable-zoom 
        tone-mapping="neutral" poster="poster.webp" shadow-intensity="1" 
        exposure="1.31" shadow-softness="0" auto-rotate
        min-camera-orbit="auto auto 3.5m" max-camera-orbit="auto auto 3.5m" 
        min-field-of-view="30deg" max-field-of-view="30deg">
    </model-viewer>
`;

section1_2_div1.appendChild(modelContainer);

const colorCircles = document.querySelectorAll('.section1-2_div4');
const productModel = document.getElementById('product_model');

const colorMappings = {
    0: { baseColor: '#0E0D10', name: 'Midnight Black' },
    1: { baseColor: '#FBFBFB', name: 'Pearly White' },
    2: { baseColor: '#D72323', name: 'Racing Red' }
};

const originalCircleClasses = [
    'circle_color_active',
    'circle_color',
    'circle_color_red'
];

function isWhiteColor(color) {
    if (!color || color.length < 3) return false;
    const r = color[0];
    const g = color[1];
    const b = color[2];
    return r > 0.8 && g > 0.8 && b > 0.8;
}

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
        parseInt(result[1], 16) / 255,
        parseInt(result[2], 16) / 255,
        parseInt(result[3], 16) / 255,
        1.0
    ] : null;
}

colorCircles.forEach((circleContainer, clickedIndex) => {
    const circle = circleContainer.querySelector('div');

    circleContainer.addEventListener('click', () => {
        colorCircles.forEach((container, i) => {
            const c = container.querySelector('div');
            c.className = originalCircleClasses[i];
        });

        circle.className = 'circle_color_active';

        if (colorMappings[clickedIndex] && productModel) {
            const changeModelColor = () => {
                try {
                    const materials = productModel.model.materials;
                    materials.forEach(material => {
                        if (material && material.pbrMetallicRoughness) {
                            const currentColor = material.pbrMetallicRoughness.baseColorFactor;
                            if (isWhiteColor(currentColor)) {
                                const newColor = hexToRgb(colorMappings[clickedIndex].baseColor);
                                if (newColor) {
                                    material.pbrMetallicRoughness.setBaseColorFactor(newColor);
                                }
                            }
                        }
                    });
                } catch (error) {
                    console.log('Model color change:', error);
                }
            };

            if (productModel.loaded) {
                changeModelColor();
            } else {
                productModel.addEventListener('load', changeModelColor, { once: true });
            }
        }
    });
});

document.getElementById("text_reviews1").innerHTML = "Customer";
document.getElementById("text_reviews2").innerHTML = "Reviews";
document.getElementById("text_reviews3").innerHTML = "What our riders are saying about their experience.";

const reviews = [{
        text: "Absolutely incredible machine! The " + productData.name + " handles like a dream and the power delivery is smooth yet exhilarating. Best purchase I've made in years. The build quality is outstanding and it turns heads everywhere I go.",
        author: "MICHAEL THOMPSON",
        date: "Verified Purchase - Dec 2024"
    },
    {
        text: "I've owned several high-performance bikes, but this one stands out. The attention to detail is remarkable, from the premium materials to the advanced tech features. The cornering ABS saved me more than once. Worth every penny!",
        author: "SARAH MARTINEZ",
        date: "Verified Purchase - Nov 2024"
    },
    {
        text: "Five stars without hesitation! The acceleration is mind-blowing, and the comfort on long rides exceeded my expectations. TAYVO has really nailed it with this model. Customer service was exceptional throughout the buying process.",
        author: "JAMES WILLIAMS",
        date: "Verified Purchase - Oct 2024"
    },
    {
        text: "This motorcycle exceeds all expectations. The engineering is flawless, and every ride feels like an adventure. The electronic suspension adjustment makes all the difference on different terrains. Highly recommended for serious riders!",
        author: "DAVID CHEN",
        date: "Verified Purchase - Sep 2024"
    },
    {
        text: "Coming from a competitor brand, I was skeptical at first. But the " + productData.name + " has completely won me over. The technology integration is seamless, and the riding experience is unmatched. Best decision I've made this year!",
        author: "EMILY RODRIGUEZ",
        date: "Verified Purchase - Aug 2024"
    }
];

let currentReviewIndex = 0;

function isTablet() {
    return window.innerWidth > 768 && window.innerWidth <= 1024;
}

function isMobile() {
    return window.innerWidth <= 768;
}

function updateReviews() {
    const reviewCards = document.querySelectorAll('.review_card');

    if (isTablet()) {
        reviewCards.forEach((card, index) => {
            if (index === 0) {
                card.style.display = 'flex';
                const reviewIndex = currentReviewIndex % reviews.length;
                document.getElementById("review1").innerHTML = reviews[reviewIndex].text;
                document.getElementById("author1").innerHTML = reviews[reviewIndex].author;
                document.getElementById("date1").innerHTML = reviews[reviewIndex].date;
            } else {
                card.style.display = 'none';
            }
        });
    } else if (isMobile()) {
        reviewCards.forEach((card, index) => {
            if (index === 0) {
                card.style.display = 'flex';
                const reviewIndex = currentReviewIndex % reviews.length;
                document.getElementById("review1").innerHTML = reviews[reviewIndex].text;
                document.getElementById("author1").innerHTML = reviews[reviewIndex].author;
                document.getElementById("date1").innerHTML = reviews[reviewIndex].date;
            } else {
                card.style.display = 'none';
            }
        });
    } else {
        reviewCards.forEach(card => {
            card.style.display = 'flex';
        });

        const review1Index = currentReviewIndex;
        const review2Index = (currentReviewIndex + 1) % reviews.length;
        const review3Index = (currentReviewIndex + 2) % reviews.length;

        document.getElementById("review1").innerHTML = reviews[review1Index].text;
        document.getElementById("author1").innerHTML = reviews[review1Index].author;
        document.getElementById("date1").innerHTML = reviews[review1Index].date;

        document.getElementById("review2").innerHTML = reviews[review2Index].text;
        document.getElementById("author2").innerHTML = reviews[review2Index].author;
        document.getElementById("date2").innerHTML = reviews[review2Index].date;

        document.getElementById("review3").innerHTML = reviews[review3Index].text;
        document.getElementById("author3").innerHTML = reviews[review3Index].author;
        document.getElementById("date3").innerHTML = reviews[review3Index].date;
    }
}

updateReviews();

window.addEventListener('resize', updateReviews);

const prevReviewBtn = document.querySelector('.prev_review');
const nextReviewBtn = document.querySelector('.next_review');

prevReviewBtn.addEventListener('click', () => {
    currentReviewIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
    updateReviews();
});

nextReviewBtn.addEventListener('click', () => {
    currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
    updateReviews();
});