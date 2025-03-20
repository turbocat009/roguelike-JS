import Bullet from "./bullet.js";

const canvas = document.getElementById("Canvas");

class Gun {
    constructor(canvas, playerX, playerY) {
        this.ctx = canvas.getContext("2d");
        this.image = document.getElementById("gun");
        this.x = playerX + 60;
        this.y =  playerY + 25;
        this.width = 35;
        this.height = 35;
    }

    draw() {
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    updatePosition(playerX, playerY){
        this.x = playerX + 60;
        this.y =  playerY + 25;
    }

    shootGun(){
        document.addEventListener('keydown', (event) => {
            switch(event.key) {
            case 'Q':
                alert("TUTIO")
                const bullet = new Bullet(canvas, this.x, this.y);
                bullet.draw();
                bullet.updatePosition();
                break;
            }
        });

    }
    
}

export default Gun;
