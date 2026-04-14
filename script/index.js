const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const menuIcon = document.getElementById("menuIcon");

let isOpen = false;

menuBtn.addEventListener("click", () => {
    isOpen = !isOpen;

    if (isOpen) {
        mobileMenu.classList.remove("hidden");
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark"); // ❌ close icon
    } else {
        mobileMenu.classList.add("hidden");
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars"); // ☰ open icon
    }
});

const sounds = [
    {
        title: "Wood, twig snap in forest",
        image: "assets/content.png"
    },
    {
        title: "Wind forest ambient sound",
        image: "assets/content.png"
    },
    {
        title: "Cinematic whoosh effect",
        image: "assets/content.png"
    }
];

const container = document.getElementById("soundContainer");

sounds.forEach(sound => {
    container.innerHTML += `
    <div class="bg-[#ECEFF3] p-4 rounded-md shadow-xl">
        <div class="flex items-center gap-5">
            <img src="${sound.image}" alt="">
            <h3 class="font-semibold">${sound.title}</h3>
        </div>

        <div class="mt-5">
            <img src="assets/Player.png" alt="">
        </div>

        <div class="flex gap-3 md:justify-around md:mt-5">
            <button class="btn md:px-10"><i class="fa-solid fa-download"></i></button>
            <button class="btn md:px-10"><i class="fa-solid fa-bars"></i></button>
            <button class="btn md:px-10"><i class="fa-solid fa-question"></i></button>
        </div>
    </div>
  `;
});

document.addEventListener("DOMContentLoaded", () => {

    const packContainer = document.getElementById("packContainer");

    const soundPacks = [
        {
            title: "Anime Sound Pack",
            desc: "50+ high quality anime sound effects",
            color: "bg-red-100"
        },
        {
            title: "Forest Sound Pack",
            desc: "Natural forest ambience sounds",
            color: "bg-green-100"
        },
        {
            title: "Sci-Fi Sound Pack",
            desc: "Futuristic laser & space sounds",
            color: "bg-blue-100"
        },
        {
            title: "Horror Sound Pack",
            desc: "Dark cinematic horror effects",
            color: "bg-purple-100"
        },
        {
            title: "UI Sound Pack",
            desc: "Click & notification sounds",
            color: "bg-yellow-100"
        },
        {
            title: "Whoosh Pack",
            desc: "Cinematic transition sounds",
            color: "bg-pink-100"
        }
    ];

    let html = "";

    soundPacks.forEach(pack => {
        html += `
            <div class="${pack.color} p-5 rounded-lg shadow-md hover:shadow-xl transition">

                <h3 class="text-xl font-bold">${pack.title}</h3>

                <p class="text-gray-700 mt-2">
                    ${pack.desc}
                </p>

                <button class="mt-4 px-4 py-2 bg-black text-white rounded-md">
                    View Pack
                </button>

            </div>
        `;
    });

    packContainer.innerHTML = html;

});