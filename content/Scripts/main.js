import Player from "./player.js";

document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("Canvas");
    const ctx = canvas.getContext("2d");

    if (!canvas || !ctx) {
        console.error("Canvas element not found or context not supported.");
        return;
    }

    canvas.width = 640;
    canvas.height = 480;


    const player = new Player(canvas);

    function gameLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        player.draw();
        player.checkKeys();
        player.changeSpeed();
        requestAnimationFrame(gameLoop);
    }

    gameLoop();
});
