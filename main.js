console.log("main.js");

let container = document.getElementById("container");

for (let index = 0; index < 6; index++) {
  let icon = document.createElement("div");
  icon.classList.add("icon");
  container.appendChild(icon);
}

let bigIcon = document.createElement("div");
bigIcon.classList.add("big-icon");
container.appendChild(bigIcon);
