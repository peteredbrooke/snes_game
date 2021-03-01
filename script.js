const inventoryPress = document.getElementById("inventory");
document.addEventListener("keydown", (event) => {
  if (event.key === "i") {
    inventoryPress.style.display = "inline";
  } else inventoryPress.style.display = "none";
});

window.addEventListener("load", () => {
  astronaut.style.position = "absolute";
  astronaut.style.left = "0px";
  astronaut.style.top = "300px";
});

let ship = document.getElementById("ship");
let astronaut = document.querySelector("#astro-man");
let modifier = 30;
let mainContainer = document.getElementById("game-container");
let gatesToCity = document.getElementById("gates");
let gatesWarning = document.getElementById("gates2");
const gamePageTwo = document.getElementById("game_page2");
const gamePageOne = document.getElementById("game_page1");
const gamePageThree = document.getElementById("game_page3");
const startButton = document.getElementById("loading__title");
const oxygenBar = document.getElementById("ox-bar");
const oxygenBarContainer = document.getElementById("oxygen-bar");
const health = document.getElementById("health");
const healthBar = document.getElementById("health-bar");
const gameOverText = document.getElementById("game__over");
// const restartYesButton = document.getElementById("restart__yes");
// const restartNoButton = document.getElementById("restart__no");
const messageFirst = document.getElementById("text-box");
const landingPage = document.getElementById("game_page0");

document.addEventListener("keyup", (event) => {
  if (event.code === "Space" && event.target === document.body) {
    astronaut.style.display = "block";

    //7. Start button onclick fade into opacity 1;
    startButton.classList.add("animate__animated", "animate__fadeOut");
    // startButton.classList.remove("animate__animated", "animate__fadeOut");

    //when the start button has faded out start the function of  message one and then function setinterval
    startButton.addEventListener("animationend", () => {
      gamePageOne.classList.add("animate__animated", "animate__fadeIn");
      gamePageOne.style.setProperty("--animate-duration", "4s");
      gamePageOne.style.display = "block";
      landingPage.style.display = "none";
      oxygenBar.style.display = "inline-flex";
      oxygenBarContainer.style.display = "inline-flex";
      health.style.display = "inline-flex";
      healthBar.style.display = "inline-flex";
      messageFirst.style.display = "inline";
      //   messageFirst.classList.add("animate__animated", "animate__fadeIn");
      messageFirst.style.setProperty("--animate-duration", "12s");
      messageFirst.classList.add("animate__animated", "animate__fadeOut");

      startButton.style.display = "none";

      //set interval function to start countdown
      let timeLeft = 50;
      setInterval(() => {
        if (timeLeft <= 0) {
          clearInterval;
          // alert user of gameover
          /// when oxygen bar value is 0
          gameOverText.style.display = "inline";
          astronaut.style.display = "none";
          // alert("game over");
        }
        //decrease oxygen bar as the countdown timer goes down.
        oxygenBar.value = 0 + timeLeft;
        timeLeft -= 1;
      }, 500);
    });
  }
});

window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "w":
      astronaut.style.top = parseInt(astronaut.style.top) - modifier + "px";
      break;
    case "s":
      astronaut.style.top = parseInt(astronaut.style.top) + modifier + "px";
      break;
    case "a":
      astronaut.style.left = parseInt(astronaut.style.left) - modifier + "px";
      break;
    case "d":
      astronaut.style.left = parseInt(astronaut.style.left) + modifier + "px";
      break;
  }

  if (event.key === "s") {
    let astroPosition = astronaut.offsetTop;
    console.log(astroPosition);
    let gatesPosition = gates.offsetTop;
    console.log(gatesPosition);
    let gatesTwoPosition = gatesWarning.offsetTop;
    let difference = gatesPosition - astroPosition;
    let differenceTwo = gatesTwoPosition - astroPosition;
    if (difference <= 50 && difference > 0) {
      console.log("its close");
      gamePageOne.style.display = "none";
      gamePageTwo.style.display = "block";
      astronaut.style.top = "50px";
    } else if (differenceTwo <= 50 && differenceTwo > 0) {
      console.log("is it close");
      gamePageTwo.style.display = "none";
      gamePageThree.style.display = "block";
      astronaut.style.top = "5px";
      astronaut.style.height = "400px";
      astronaut.style.width = "400px";
    }
  }
});
