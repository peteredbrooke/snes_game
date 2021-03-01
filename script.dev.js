"use strict";

var inventoryPress = document.getElementById("inventory");
document.addEventListener("keydown", function (event) {
  if (event.key === "i") {
    inventoryPress.style.display = "inline";
  } else inventoryPress.style.display = "none";
});
window.addEventListener("load", function () {
  astronaut.style.position = "absolute";
  astronaut.style.left = "0px";
  astronaut.style.top = "300px";
});
var ship = document.getElementById("ship");
var astronaut = document.querySelector("#astro-man");
var modifier = 30;
var mainContainer = document.getElementById("game-container");
var gatesToCity = document.getElementById("gates");
var gatesWarning = document.getElementById("gates2");
var gamePageTwo = document.getElementById("game_page2");
var gamePageOne = document.getElementById("game_page1");
var gamePageThree = document.getElementById("game_page3");
var startButton = document.getElementById("loading__title");
var oxygenBar = document.getElementById("ox-bar");
var oxygenBarContainer = document.getElementById("oxygen-bar");
var gameOverText = document.getElementById("game__over"); // const restartYesButton = document.getElementById("restart__yes");
// const restartNoButton = document.getElementById("restart__no");

var messageFirst = document.getElementById("text-box");
var landingPage = document.getElementById("game_page0");
document.addEventListener("keyup", function (event) {
  if (event.code === "Space" && event.target === document.body) {
    astronaut.style.display = "block"; //7. Start button onclick fade into opacity 1;

    startButton.classList.add("animate__animated", "animate__fadeOut"); // startButton.classList.remove("animate__animated", "animate__fadeOut");
    //when the start button has faded out start the function of  message one and then function setinterval

    startButton.addEventListener("animationend", function () {
      gamePageOne.classList.add("animate__animated", "animate__fadeIn");
      gamePageOne.style.setProperty("--animate-duration", "4s");
      gamePageOne.style.display = "block";
      landingPage.style.display = "none";
      oxygenBar.style.display = "inline-flex";
      oxygenBarContainer.style.display = "inline-flex";
      messageFirst.style.display = "inline"; //   messageFirst.classList.add("animate__animated", "animate__fadeIn");

      messageFirst.style.setProperty("--animate-duration", "12s");
      messageFirst.classList.add("animate__animated", "animate__fadeOut");
      startButton.style.display = "none"; //set interval function to start countdown

      var timeLeft = 50;
      setInterval(function () {
        if (timeLeft <= 0) {
          clearInterval; // alert user of gameover
          /// when oxygen bar value is 0

          gameOverText.style.display = "inline";
          astronaut.style.display = "none"; // alert("game over");
        } //decrease oxygen bar as the countdown timer goes down.


        oxygenBar.value = 0 + timeLeft;
        timeLeft -= 1;
      }, 500);
    });
  }
});
window.addEventListener("keydown", function (event) {
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
    var astroPosition = astronaut.offsetTop;
    console.log(astroPosition);
    var gatesPosition = gates.offsetTop;
    var gatesTwoPosition = gatesWarning.offsetTop;
    console.log(gatesPosition);
    var difference = gatesPosition - astroPosition;
    var differenceTwo = gatesWarning - astroPosition;

    if (difference <= 50 && difference > 0) {
      console.log("its close");
      gamePageOne.style.display = "none";
      gamePageTwo.style.display = "block";
      astronaut.style.top = "50px";
    } else if (differenceTwo <= 50 && differenceTwo > 0) {
      gamePageTwo.style.display = "none";
      gamePageThree.style.display = "block";
    } // } else gamePageTwo.style.display = "none";
    // event.stopPropagation();

  }
});