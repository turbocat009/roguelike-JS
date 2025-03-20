class Player {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.image = document.getElementById("mChar");
        this.x = 300;
        this.y =  100;
        this.width = 50;
        this.height = 50;
        this.speedX = 0;
        this.speedY = 0;
        this.maxSpeed = 6;
        this.rightKey = false;
        this.leftKey = false;
        this.upKey = false;
        this.downKey = false;
    }

    draw() {
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    changeSpeed(){
        if(this.speedX == 5 && this.speedY == 5){
            this.speedX = 3;
            this.speedY = 3;
        }
        if(this.rightKey && this.speedX < this.maxSpeed){
            this.speedX += 0.5;
        } else if(this.leftKey && this.speedX > -this.maxSpeed){
            this.speedX -= 0.5;
        }else if(!this.rightKey && !this.leftKey){
            if(this.speedX > 0){
                this.speedX -= 0.25;
            }else if(this.speedX < 0){
                this.speedX += 0.25;
            } else{
                this.speedX = 0;
            }
        }
        if (this.downKey && this.speedY < this.maxSpeed) {
            this.speedY += 0.5;
        } else if (this.upKey && this.speedY > -this.maxSpeed) {
            this.speedY -= 0.5;
        } else if (!this.upKey && !this.downKey) {
            if (this.speedY > 0) {
                this.speedY -= 0.25;
            } else if (this.speedY < 0) {
                this.speedY += 0.25;
            } else {
                this.speedY = 0;
            }
        }
        this.updatePosition();
    }

    updatePosition() {
        if (this.x < 0) { this.x = 0; this.speedX = 0;}
        if (this.x + this.width > 640) { this.x = 640 - this.width; this.speedX = 0;}
        if (this.y < 0) { this.y = 0; this.speedY = 0; }
        if (this.y + this.width > 480) { this.y = 480 - this.width; this.speedY = 0; }
        this.x += this.speedX;
        this.y += this.speedY;
    }

    checkKeys() {
        document.addEventListener('keydown', (event) => {
            switch(event.key) {
            case 'ArrowLeft':
                this.leftKey = true;
                break;
            case 'ArrowRight':
                this.rightKey = true;
                break;
            case 'ArrowUp':
                this.upKey = true;
                break;
            case 'ArrowDown':
                this.downKey = true;
                break;
            }
        });

        document.addEventListener('keyup', (event) => {
            switch(event.key) {
            case 'ArrowLeft':
                this.leftKey = false;
                break;
            case 'ArrowRight':
                this.rightKey = false;
                break;
            case 'ArrowUp':
                this.upKey = false;
                break;
            case 'ArrowDown':
                this.downKey = false;
                break;
            }
        });
    }
}

export default Player;
