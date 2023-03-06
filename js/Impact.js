

export class Impact {
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
        this.maxFrame = 4
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
        
        context.drawImage(this.image, this.frameX * this.width , this.frameY * this.height, this.width, this.height, this.x - this.size /2, this.y - this.size / 2, this.size, this.size)
        
    }
}


export class Impact_1 extends Impact {
    constructor(x,y) {
        super(x,y)
        this.width = 192
        this.height = 192
        this.image = document.getElementById('impact1')
    }

}

export class Impact_2 extends Impact {
    constructor(x,y) {
        super(x,y)
        this.width = 192
        this.height = 192
        this.image = document.getElementById('impact2')
    }

}

export class Impact_3 extends Impact {
    constructor(x,y) {
        super(x,y)
        this.width = 192
        this.height = 192
        this.image = document.getElementById('impact3')
    }

}

export class Impact_4 extends Impact {
    constructor(x,y) {
        super(x,y)
        this.width = 192
        this.height = 192
        this.image = document.getElementById('impact4')
        
    }

}

