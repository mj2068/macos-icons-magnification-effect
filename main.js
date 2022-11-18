console.log("main.js");

let container = document.getElementById("container");

for (let index = 0; index < 8; index++) {
  let icon = document.createElement("div");
  icon.classList.add("icon");
  container.appendChild(icon);
}

// let bigIcon = document.createElement("div");
// bigIcon.classList.add("big-icon");
// container.appendChild(bigIcon);

for (const icon of document.getElementsByClassName("icon")) {
  icon.style.setProperty("--width", `${100}px`);
  icon.style.setProperty("--height", `${100}px`);
}

container.addEventListener("mousemove", function (event) {
  // console.log(event);
  for (const icon of document.getElementsByClassName("icon")) {
    // console.log(event.x - icon.offsetLeft);

    let diff = event.x - (icon.offsetLeft + icon.clientWidth / 2);
    let absDiff = Math.abs(diff);
    let range = 500;
    if (absDiff <= range) {
      icon.style.setProperty(
        "--width",
        `${((range - absDiff) / range + 1) * 100}px`
      );
      icon.style.setProperty(
        "--height",
        `${((range - absDiff) / range + 1) * 100}px`
      );
    } else {
      icon.style.setProperty("--width", `${100}px`);
      icon.style.setProperty("--height", `${100}px`);
    }
  }
});
