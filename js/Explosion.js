

export class Explosion {
    constructor(x, y) {

        this.x = x
        this.y = y
        this.speedX = Math.random() * 6 - 3
        this.speedY = Math.random() * 6 - 3
        this.size = Math.random() * 100 + 100
        this.gravity = 0
        this.markedForDeletion = false;
        this.frameX = 0
        this.frameY = 0
        this.maxFrame = 13
        this.fps = 40
        this.interval = 1000/this.fps
        this.timer = 0


    }
    update() {

       
        this.speedY += this.gravity
        this.x += this.speedX
        this.y += this.speedY
        

        if (this.timer > this.fps ) {
            this.size -= 10
            this.frameX++;
            this.timer = 0
            if (this.frameX> this.maxFrame) this.markedForDeletion = true
            
        } else {
           
            this.timer += this.interval
        }

  
    }
    draw(context) {

        
        // context.beginPath();
        // context.fillStyle = "yellow"; //red
        // context.arc(this.x, this.y , this.size ,0,Math.PI*2,true);
        // context.fill();
        // context.stroke();

        context.drawImage(this.image, this.frameX * this.width , this.frameY * this.height, this.width, this.height, this.x - this.size /2, this.y - this.size / 2, this.size, this.size)
        
    }
}

export class Explosion1 extends Explosion {
    constructor(x,y) {
        super(x,y)
        this.width = 196
        this.height = 190
        this.image = document.getElementById('explosion1')
        
    }

}

export class Explosion2 extends Explosion {
    constructor(x,y) {
        super(x,y)
        this.width = 205
        this.height = 195
        this.image = document.getElementById('explosion2')
    }

}

export class Explosion3 extends Explosion {
    constructor(x,y) {
        super(x,y)
        this.width = 192
        this.height = 193
        this.image = document.getElementById('explosion3')
    }

}
