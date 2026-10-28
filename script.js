// ===============================
// Happy Birthday Shohagi Moina
// Script Part 1
// ===============================

const intro = document.getElementById("intro");
const openBtn = document.getElementById("openBtn");
const mainScene = document.getElementById("mainScene");
const cat = document.getElementById("cat");
const messageBox = document.getElementById("messageBox");
const typingText = document.getElementById("typingText");
const clickMe = document.getElementById("clickMe");
const shootingStar = document.getElementById("shootingStar");
const meow = new Audio("meow.mp3");
meow.volume = 0.4;
const fireworkSound = new Audio("firework.mp3");
fireworkSound.volume = 0.25;
const typeSound = new Audio("type.mp3");
typeSound.volume = 0.8;

const endingMessage = document.getElementById("endingMessage");

const firstMessage =
`Wishing you the happiest birthday!

If you had never been born, I would have missed the best part of my life 😭😂

Anyways, I hope you laugh a little more today and stay as happy as you always are.

I know this is just a small surprise, but i can't do nothing beacuse you don't even talk with me...

However, i want to see you always happy 🙃💖`;

let index = 0;

function typeWriter(){

    if(index < firstMessage.length){

        typingText.innerHTML += firstMessage.charAt(index);
    if(index % 1 === 0){

    if(typeSound.paused){

        typeSound.currentTime = 0;
        typeSound.play().catch(() => {});

    }

}

        index++;

        setTimeout(typeWriter,60);

    }else{

        clickMe.style.display="block";

    }

}

openBtn.addEventListener("click",()=>{

    intro.style.opacity="0";

    setTimeout(()=>{

        intro.style.display="none";

        mainScene.style.display="block";

        setTimeout(()=>{

            cat.classList.add("show");

        },500);

        setTimeout(()=>{

            messageBox.classList.add("show");

            typeWriter();

        },1800);

    },800);

});

// ===============================
// Happy Birthday Shohagi Moina
// Script Part 3B
// ===============================

// Create floating hearts
function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "💖";

    heart.style.position = "absolute";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "0px";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    let y = 0;

    const animation = setInterval(() => {

        y += 3;

        heart.style.bottom = y + "px";
        heart.style.opacity = 1 - (y / 500);

        if (y > 500) {

            clearInterval(animation);

            heart.remove();

        }

    }, 16);

}

// Second message
const secondMessage =
`I hope this little surprise made you smile today.

Have the happiest birthday ever, Shohagi Moina! 🐱`;

clickMe.addEventListener("click", () => {

    clickMe.style.display = "none";
    meow.currentTime = 0;
meow.play().catch(() => {});
fireworkSound.play().then(() => {
    fireworkSound.pause();
    fireworkSound.currentTime = 0;
}).catch(() => {});

    for(let i = 0; i < 20; i++){

        setTimeout(createHeart, i * 120);

    }

    // Hide first message
    messageBox.style.opacity = "0";

    setTimeout(() => {

        typingText.innerHTML = "";

        document.getElementById("titleMessage").innerHTML = "";

        messageBox.style.opacity = "1";

        let secondIndex = 0;

function typeSecond(){

    if(secondIndex < secondMessage.length){

        typingText.innerHTML += secondMessage.charAt(secondIndex);
    if(secondIndex % 1 === 0){

    if(typeSound.paused){

        typeSound.currentTime = 0;
        typeSound.play().catch(() => {});

    }

}

        secondIndex++;

        setTimeout(typeSecond,60);

    }else{

        cat.classList.remove("animate");

        void cat.offsetWidth;

        cat.classList.add("animate");
        for(let i = 0; i < 3; i++){

   setTimeout(() => {

        shootingStar.classList.remove("show");

        void shootingStar.offsetWidth;

        shootingStar.classList.add("show");

    }, i * 700);

}
       for(let i = 0; i < 12; i++){

    setTimeout(() => {

        launchFireworks();

    }, i * 220);

}
setTimeout(() => {

    endingMessage.classList.add("show");

}, 5000);

    }

}

        typeSecond();

    },800);

});

// ===============================
// FIREWORKS
// ===============================

function launchFireworks(){
fireworkSound.currentTime = 0;
fireworkSound.play().catch(() => {});
  const startX = 15 + Math.random() * 70;
  const startY = 10 + Math.random() * 35;

    const colors = [
        "#ff4d6d",
        "#ffd93d",
        "#6bcBef",
        "#7bed9f",
        "#ffffff",
        "#b388ff"
    ];

    for(let i=0;i<40;i++){

        const spark = document.createElement("div");

        spark.style.position="fixed";
        spark.style.left = startX + "%";
        spark.style.top = startY + "%";
        spark.style.width="6px";
        spark.style.height="6px";
        spark.style.borderRadius="50%";
        spark.style.background=
        colors[Math.floor(Math.random()*colors.length)];

        spark.style.pointerEvents="none";
        spark.style.zIndex="9999";

        document.body.appendChild(spark);

        const angle=Math.random()*Math.PI*2;
        const distance=80+Math.random()*120;

        spark.animate([

            {
                transform:"translate(0,0)",
                opacity:1
            },

            {
                transform:`translate(${Math.cos(angle)*distance}px,${Math.sin(angle)*distance}px)`,
                opacity:0
            }

        ],{

            duration:1200,
            easing:"ease-out"

        });

        setTimeout(()=>{

            spark.remove();

        },1200);

    }

}
