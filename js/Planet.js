


export class Planet {
    constructor(game) {
        this.game = game
        this.markedForDeletion = false;
        this.rotate = 0
        var vrTemp = Math.random() > 0.5 ? - Math.random() : Math.random();
        this.vrTemp = vrTemp / 180
        this.rotate = 0


    }
    update() {
    
        // this.x += this.game.speedX / 5
        this.y += this.gravity
        this.y++
        
        if (this.y > this.game.height) {
            this.markedForDeletion = true
        }

        this.rotate += this.vrTemp
    }
    draw(context) {

        context.save();

        context.translate(this.x + this.width / 2, this.y + this.height / 2)
        context.rotate(this.rotate)

        context.drawImage(this.image, 0 - this.width / 2, 0 - this.height / 2, this.width, this.height)
        
        context.restore();
    }
}

export class Planet_1 extends Planet {
    constructor(game) {
        super(game)

        this.image = document.getElementById('planet1')
        this.width = 1000
        this.size = Math.random() * this.width + 100
        this.width = this.size
        this.height = this.width

        this.x = Math.random() * (this.game.width - this.width) - ((this.game.width - this.width) / 2)
        this.y = - this.height
        this.gravity = this.size / (this.size * 2)
        

    }
}

export class Planet_2 extends Planet {
    constructor(game) {
        super(game)

        this.image = document.getElementById('planet2')
        this.width = 1000
        this.size = Math.random() * this.width + 100
        this.width = this.size
        this.height = this.width

        this.x = Math.random() * (this.game.width - this.width) - ((this.game.width - this.width) / 2)
        this.y = - this.height
        this.gravity = this.size / (this.size * 2)

    }
}

export class Planet_3 extends Planet {
    constructor(game) {
        super(game)

        this.image = document.getElementById('planet3')
        this.width = 1000
        this.size = Math.random() * this.width + 100
        this.width = this.size
        this.height = this.width

        let px = Math.random() * (this.game.width - this.width) - ((this.game.width - this.width) / 2)
        this.x = this.game.width / 2 + px
        this.y = - this.height
        this.gravity = this.size / (this.size * 2)

    }
}

export class Planet_4 extends Planet {
    constructor(game) {
        super(game)

        this.image = document.getElementById('planet4')
        this.width = 1000
        this.size = Math.random() * this.width + 100
        this.width = this.size
        this.height = this.width

        this.x = Math.random() * (this.game.width - this.width) - ((this.game.width - this.width) / 2)
        this.y = - this.height
        this.gravity = this.size / (this.size * 2)

    }
}

export class Planet_5 extends Planet {
    constructor(game) {
        super(game)

        this.image = document.getElementById('planet5')
        this.width = 1000
        this.size = Math.random() * this.width + 100
        this.width = this.size
        this.height = this.width

        this.x = Math.random() * (this.game.width - this.width) - ((this.game.width - this.width) / 2)
        this.y = - this.height
        this.gravity = this.size / (this.size * 2)
    }
}

export class Planet_6 extends Planet {
    constructor(game) {
        super(game)

        this.image = document.getElementById('planet6')
        this.width = 1000
        this.size = Math.random() * this.width + 100
        this.width = this.size
        this.height = this.width

        this.x = Math.random() * (this.game.width - this.width) - ((this.game.width - this.width) / 2)
        this.y = - this.height
        this.gravity = this.size / (this.size * 2)

    }
}

export class Planet_7 extends Planet {
    constructor(game) {
        super(game)

        this.image = document.getElementById('planet7')
        this.width = 1000
        this.size = Math.random() * this.width + 100
        this.width = this.size
        this.height = this.width

        this.x = Math.random() * (this.game.width - this.width) - ((this.game.width - this.width) / 2)
        this.y = - this.height
        this.gravity = this.size / (this.size * 2)

    }
}

export class Planet_8 extends Planet {
    constructor(game) {
        super(game)

        this.image = document.getElementById('planet8')
        this.width = 1000
        this.size = Math.random() * this.width + 100
        this.width = this.size
        this.height = this.width

        this.x = Math.random() * (this.game.width - this.width) - ((this.game.width - this.width) / 2)
        this.y = - this.height
        this.gravity = this.size / (this.size * 2)

    }
}

export class Galaxy_1 extends Planet {
    constructor(game) {
        super(game)

        this.image = document.getElementById('galaxy1')
        this.width = 1000
        this.size = Math.random() * this.width + 100
        this.width = this.size
        this.height = this.width

        this.x = Math.random() * (this.game.width - this.width) - ((this.game.width - this.width) / 2)
        this.y = - this.height
        this.gravity = this.size / (this.size * 2)

    }
}

export class Galaxy_2 extends Planet {
    constructor(game) {
        super(game)

        this.image = document.getElementById('galaxy2')
        this.width = 1000
        this.size = Math.random() * this.width + 100
        this.width = this.size
        this.height = this.width

        this.x = Math.random() * (this.game.width - this.width) - ((this.game.width - this.width) / 2)
        this.y = - this.height
        this.gravity = this.size / (this.size * 2)

    }
}

export class Nuage extends Planet {
    constructor(game) {
        super(game)

        this.image = document.getElementById('nuage1')
        this.width = 1000
        this.size = Math.random() * this.width + 100
        this.width = this.size
        this.height = this.width

        this.x = Math.random() * (this.game.width - this.width) - ((this.game.width - this.width) / 2)
        this.y = - this.height
        this.gravity = this.size / (this.size * 2)

    }
}
