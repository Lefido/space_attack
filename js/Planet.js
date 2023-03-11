


export class Planet {
    constructor(game) {
        this.game = game
        this.markedForDeletion = false;

    }
    update() {
    
        this.y += this.gravity + this.game.speed * 4
        this.y++
        
        if (this.y > this.game.height) {
            this.markedForDeletion = true
        }

    }
    draw(context) {

        context.drawImage(this.image, this.x, this.y, this.width, this.height)
        
    }
}

export class Planet_1 extends Planet {
    constructor(game) {
        super(game)

        this.image = document.getElementById('planet1')
        this.width = 2200
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
        this.width = 2048
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
        this.width = 900
        this.size = Math.random() * this.width + 100
        this.width = this.size
        this.height = this.width

        this.x = Math.random() * (this.game.width - this.width) - ((this.game.width - this.width) / 2)
        this.y = - this.height
        this.gravity = this.size / (this.size * 2)

    }
}

export class Planet_4 extends Planet {
    constructor(game) {
        super(game)

        this.image = document.getElementById('planet4')
        this.width = 800
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
        this.width = 1024
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
        this.width = 800
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
        this.width = 840
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
        this.width = 840
        this.size = Math.random() * this.width + 100
        this.width = this.size
        this.height = this.width

        this.x = Math.random() * (this.game.width - this.width) - ((this.game.width - this.width) / 2)
        this.y = - this.height
        this.gravity = this.size / (this.size * 2)

    }
}