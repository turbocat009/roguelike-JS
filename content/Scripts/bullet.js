class Bullet {
    constructor(canvas, gunX, gunY) {
        this.ctx = canvas.getContext("2d");
        this.image = document.getElementById("bullet");
        this.x = gunX;
        this.y =  gunY;
        this.width = 35;
        this.height = 35;
        this.speedX = 0.5;
        this.speedY = 0;
        this.maxSpeed = 10;

    }

    draw() {
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    updatePosition(){
        this.x += this.speedX;
        this.y +=  this.speedY;
    }

    
}

export default Bullet;
