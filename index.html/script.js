/* =====================================
   SELECT ELEMENTS
===================================== */

const girl = document.querySelector(".girl");
const moon = document.querySelector(".moon");
const door = document.querySelector(".door");
const doorLight = document.querySelector(".door-light");

const artworkOne = document.querySelector(".artwork-one");
const artworkTwo = document.querySelector(".artwork-two");

const paintRed = document.querySelector(".paint-red");
const paintBlue = document.querySelector(".paint-blue");
const paintYellow = document.querySelector(".paint-yellow");

const scenes = document.querySelectorAll(".scene");
const revealElements = document.querySelectorAll(".reveal");


/* =====================================
   SCROLL EVENT
===================================== */

window.addEventListener("scroll", function () {

    const scrollY = window.scrollY;


    /* =================================
       PARALLAX - GIRL
    ================================= */

    if (girl) {

        const girlMovement = scrollY * 0.35;

        girl.style.transform =
            `translateX(${girlMovement}px)`;

    }


    /* =================================
       PARALLAX - MOON
    ================================= */

    if (moon) {

        const moonMovement = scrollY * 0.15;

        moon.style.transform =
            `translateY(${moonMovement}px)`;

    }


    /* =================================
       DOOR EFFECT
    ================================= */

    if (scrollY > 500 && scrollY < 1400) {

        door.style.transform =
            "translateX(-50%) scaleX(0.85)";

        doorLight.style.opacity = "1";

    } else {

        door.style.transform =
            "translateX(-50%) scaleX(1)";

        doorLight.style.opacity = "0";

    }


    /* =================================
       ARTWORK PARALLAX
    ================================= */

    if (artworkOne) {

        artworkOne.style.transform =
            `translateY(${scrollY * -0.12}px) rotate(5deg)`;

    }

    if (artworkTwo) {

        artworkTwo.style.transform =
            `translateY(${scrollY * 0.08}px) rotate(-7deg)`;

    }


    /* =================================
       PAINT PARALLAX
    ================================= */

    if (paintRed) {

        paintRed.style.transform =
            `translateY(${scrollY * -0.1}px)`;

    }

    if (paintBlue) {

        paintBlue.style.transform =
            `translateY(${scrollY * 0.15}px)`;

    }

    if (paintYellow) {

        paintYellow.style.transform =
            `translateY(${scrollY * -0.2}px)`;

    }


    /* =================================
       PROGRESSIVE REVEAL
    ================================= */

    revealElements.forEach(function (element) {

        const elementTop =
            element.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;

        if (elementTop < windowHeight * 0.85) {

            element.classList.add("show");

        }

    });

});


/* =====================================
   INITIAL REVEAL
===================================== */

window.dispatchEvent(new Event("scroll"));