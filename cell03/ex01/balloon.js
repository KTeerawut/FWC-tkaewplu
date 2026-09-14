const balloon = document.getElementById("balloon");

let size = 200;
let color = 0;

const colors = ["red", "green", "blue"];

balloon.addEventListener("click", function () {
    size += 10;
    color = (color + 1) % 3;

    if (size > 420) {
        size = 200;
    }

    balloon.style.width = size + "px";
    balloon.style.height = size + "px";
    balloon.style.backgroundColor = colors[color];
});

balloon.addEventListener("mouseleave", function () {
    if (size > 200) {
        size -= 5;
    }

    color = (color + 2) % 3;

    balloon.style.width = size + "px";
    balloon.style.height = size + "px";
    balloon.style.backgroundColor = colors[color];
});
