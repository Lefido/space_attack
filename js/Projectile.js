


export class Projectile {
    constructor(game, x, y) {
        this.game = game
        this.markedForDeletion = false;
        
        

    }
    update() {
    
        if (this.frameX < this.maxFrameX) {
            this.frameX++
        } else {
            this.frameX = 0
        }
        
        if (this.y > 0 ) {
            this.y -= this.velocity
        } else {
            this.markedForDeletion = true
        }

        
    }
    draw(context) {

        // context.beginPath();
        // let col = Math.round(Math.random() * 50 + 100)
        // context.fillStyle = `hsl(${col}, 80%, 50%)`
        // context.arc(this.x, this.y , this.size ,0,Math.PI*2,true);
        // context.fill();
        // context.stroke();

        context.drawImage(this.image, this.frameX * this.width , this.frameY * this.height, this.width, this.height, this.x, this.y, this.scaleX, this.scaleY)
        
    }
}

export class Projectile_1 extends Projectile {
    constructor(game, x, y) {
        super(game, x, y)

        this.image = document.getElementById('bullet1')
        this.frameX = 0
        this.frameY = 0
        this.maxFrameX = 8
        this.maxFrameY = 0
        this.width = 48
        this.height = 48
        this.degat = 3
        this.velocity = 8
        this.scaleX = 25
        this.scaleY = 25
        this.x = x - this.scaleX * 0.5
        this.y = y

    }
}

export class Projectile_2 extends Projectile {
    constructor(game, x, y) {
        super(game, x, y)

        this.image = document.getElementById('bullet2')
        this.frameX = 0
        this.frameY = 0
        this.maxFrameX = 8
        this.maxFrameY = 0
        this.width = 48
        this.height = 48
        this.degat = 6
        this.velocity = 8
        this.scaleX = 25
        this.scaleY = 25
        this.x = x - this.scaleX * 0.5
        this.y = y

    }
}

export class Projectile_3 extends Projectile {
    constructor(game, x, y) {
        super(game, x, y)

        this.image = document.getElementById('bullet3')
        this.frameX = 0
        this.frameY = 0
        this.maxFrameX = 8
        this.maxFrameY = 0
        this.width = 48
        this.height = 48
        this.degat = 9
        this.velocity = 8
        this.scaleX = 25
        this.scaleY = 25
        this.x = x - this.scaleX * 0.5
        this.y = y

    }
}



export class Projectile_4 extends Projectile {
    constructor(game, x, y) {
        super(game, x, y)

        this.image = document.getElementById('bullet4')
        this.frameX = 0
        this.frameY = 0
        this.maxFrameX = 18
        this.maxFrameY = 0
        this.width = 30
        this.height = 60
        this.degat = 10
        this.velocity = 10
        this.scaleX = 20
        this.scaleY = 45
        this.x = x - this.scaleX * 0.5
        this.y = y

    }
}

export class Projectile_5 extends Projectile {
    constructor(game, x, y) {
        super(game, x, y)

        this.image = document.getElementById('bullet5')
        this.frameX = 0
        this.frameY = 0
        this.maxFrameX = 18
        this.maxFrameY = 0
        this.width = 30
        this.height = 60
        this.degat = 12
        this.velocity = 12
        this.scaleX = 20
        this.scaleY = 45
        this.x = x - this.scaleX * 0.5
        this.y = y

    }
}

