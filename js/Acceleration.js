

export class Acceleration {
    constructor(x, y) {

        this.x = x
        this.y = y
        this.speedX = Math.random() * 2 - 1
        this.speedY = Math.random() * 6 - 3
        this.size = Math.random() * 6 + 1
        this.gravity = 0.9
        this.markedForDeletion = false;

    }
    update() {
        this.speedY += this.gravity
        this.x += this.speedX
        this.y += this.speedY
    
        if (this.size > 0.2 ) {
            this.size -= 0.2
        } else {
            this.markedForDeletion = true
        }
        
    }
    draw(context) {

       
        context.beginPath();
        let col = Math.round(Math.random() * 50 + 200)
        context.fillStyle = `hsl(${col}, 80%, 50%)`
        context.arc(this.x, this.y , this.size ,0,Math.PI*1,true);
        context.fill();
        context.stroke();
       
        // context.drawImage(this.image, this.frameX * this.width , this.frameY * this.height, this.width, this.height, this.x - this.size /2, this.y - this.size / 2, this.size, this.size)
        
    }
}

