
import { Acceleration } from "./Acceleration.js"

export class Enemy {
    constructor(game) {

        this.game = game
        this.image = document.getElementById('enemys')
        this.width = 53
        this.height = 48
        this.frameX = Math.floor(Math.random() * 6)
        this.frameY = 0
        this.attraction = Math.random() * 150  + 50
        this.x = Math.random() * (this.game.width - this.width)
        this.y = - this.height * this.frameX
        this.life = 10 + this.frameX * 2
        this.lifeMax = this.life
        this.markedForDeletion = false
        this.vy = Math.random() * 3 + 2
        this.gravity = Math.random() * 0.2 + 0.1
        this.accelerations = []
        
        
    }
    update() {

        // this.y += this.velocity
        let dx = this.x - this.game.player.x

        if (this.game.player.x != this.x) {
            this.x -= dx / this.attraction
        }

        if (this.y > this.game.player.y - this.game.player.height * 2 ||
            this.x + this.width > this.game.player.x &&
            this.x < this.game.player.x + this.game.player.width) {
            this.vy += this.gravity
            this.addAcceleration()
        }

        this.y += this.vy

        if (this.y > this.game.height) this.markedForDeletion = true

    }
    draw(context) {

        context.drawImage(this.image,this.width * this.frameX, this.width * this.frameY, this.width, this.height, this.x, this.y, this.width, this.height)
        context.font = "bold 18px serif";
        context.textAlign = "center"
        context.fillStyle = "white"
        context.fillText(this.life, this.x + this.width * 0.5, this.y + this.height * 0.5);
        context.font = "bold 16px serif";
        context.fillStyle = "yellow"
        context.fillText(this.life, this.x + this.width * 0.5, this.y + this.height * 0.5);
        
    }

    addAcceleration() {
        let nbParticule = 2
        let distance = 12
        let color = "rgb(237, 192, 43,0.4)"
        
        for (let i = 0; i < nbParticule; i++) {
            this.game.accelerations.push(new Acceleration(this.x + this.width * 0.5, this.y, color))
        }

    }

}