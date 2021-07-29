"use strict";

// Image Load For Slow Connection ////////////////////////////////////////////////
const imageUrl = "./imgs/hirz.jpg";
let container = document.querySelector("main");
let preloaderImg = document.createElement("img");
preloaderImg.src = imageUrl;

preloaderImg.addEventListener("load", (event) => {
  container.style.backgroundImage = `linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.363),
    rgba(31, 67, 78, 0.733)
  ),
  url(${imageUrl}`;

  preloaderImg = null;
});

// ////////////////////////////////////////////////

const secHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

// OOP Clock

const Clock = function () {
  this.today;
  this.hour;
  this.min;
  this.sec;
};

Clock.prototype.getTime = function () {
  this.today = new Date();
  this.hour = this.today.getHours();
  this.min = this.today.getMinutes();
  this.sec = this.today.getSeconds();
  console.log(this.sec);

  this.moveClock(this.hour, this.min, this.sec);
};

Clock.prototype.moveClock = function (hour, min, sec) {
  if (sec === 0) {
    secHand.style.transition = "none";
    secHand.style.transform = `rotate(${sec * 6 + 90}deg)`;
  } else {
    secHand.style.transform = `rotate(${sec * 6 + 90}deg)`;
    secHand.style.transition = "all 0.5s";
  }

  if (min === 0) {
    minHand.style.transition = "none";
    minHand.style.transform = `rotate(${min * 6 + 90}deg)`;
  } else {
    minHand.style.transform = `rotate(${min * 6 + 90}deg)`;
    minHand.style.transition = "all 0.5s";
  }

  if (hour === 0) {
    hourHand.style.transition = "none";
    hourHand.style.transform = `rotate(${90}deg)`;
  } else if (hour < 12) {
    hourHand.style.transform = `rotate(${hour * 30 + 90}deg)`;
    hourHand.style.transition = "all 0.5s";
  } else if (hour > 12) {
    hourHand.style.transform = `rotate(${(hour - 12) * 30 + 90}deg)`;
    hourHand.style.transition = "all 0.5s";
  }
};

const ourClock = new Clock();
setInterval(ourClock.getTime.bind(ourClock), 1000);

// Factory Function / Module Clock

// const setDate = function () {
//   let today = new Date();

//   let hour = today.getHours();
//   let min = today.getMinutes();
//   let sec = today.getSeconds();

//   return { hour, min, sec };
// };

// const changeClock = function (setDate) {
//   let clockObj = setDate;

//   console.log(clockObj);
// };

// setInterval(function () {
//   changeClock(setDate());
// }, 1000);
