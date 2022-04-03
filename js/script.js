"use strict";

const bike = document.getElementById("bike");
const wheel = document.getElementById("wheel");

document.addEventListener("keydown", function (event) {
  jump();
});

function jump() {
  if (bike.classList != "jump") {
    bike.classList.add("jump");
  }
  setTimeout(() => {
    bike.classList.remove("jump");
  }, 300);
}

let inGame = setInterval(() => {
  let bikeAtTop = parseInt(
    window.getComputedStyle(bike).getPropertyValue("top")
  );
  let wheelLeft = parseInt(
    window.getComputedStyle(wheel).getPropertyValue("left")
  );

  if (wheelLeft < 20 && wheelLeft > 0 && bikeAtTop >= 70) {
    alert("YOU DIED");
  }
}, 10);
