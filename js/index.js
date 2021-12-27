let wheels = document.querySelectorAll(".wheels");
let car = document.querySelector("#Layer_1");
let alien = document.querySelector("#alien");
let alien_body = document.querySelector("#alien_body");
let alien_eye = document.querySelector("#alien_eye");
let biker = document.querySelector("#biker");

function wheelColor(position) {
  wheels.forEach(wheel => {
    wheels[position].style.fill = "blue"
  });
}

function car_run(object, animation, time) {
  let windowWidth = window.innerWidth;
  object.style.marginLeft =   (windowWidth - 320) + "px";
  object.style.animation= `${animation} ${time}s linear`;
}

function car_back(object, animation, time) {
  object.style.marginLeft = "0";
  object.style.animation= `${animation} ${time}s linear`;
}

function alien_color(active, inactive) {
  active.style.animation = "alien_color 3s linear"
  inactive.style.animation = "none"
}
