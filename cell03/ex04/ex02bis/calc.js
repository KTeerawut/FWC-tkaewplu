let size = 200;
let color = 0;

const colors = ["red", "green", "blue"];

$("#balloon").click(function () {
    size += 10;
    color = (color + 1) % 3;

    if (size > 420) {
        size = 200;
    }

    $(this).css({
        width: size + "px",
        height: size + "px",
        "background-color": colors[color]
    });
});

$("#balloon").mouseleave(function () {
    if (size > 200) {
        size -= 5;
    }

    color = (color + 2) % 3;

    $(this).css({
        width: size + "px",
        height: size + "px",
        "background-color": colors[color]
    });
});
