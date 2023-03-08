
// import { Projectile } from "./Projectile.js"

export class Enemy {
    constructor(game, x, y) {

        this.game = game
        this.image = document.getElementById('enemys')
        this.width = 53
        this.height = 48
        this.frameX = Math.floor(Math.random() * 6)
        this.frameY = 0
        this.velocity = Math.random() * 2 + 1
        // this.x = x // (Math.random() * this.game.width) - this.width
        this.y = y
        this.dx = Math.random() * 5 + 0
        this.sin = 0
        this.x = x - game.player.width / 2
        this.accelerations = []
        this.projectiles = []
        this.markedForDeletion = false
        this.life = 5
        
    }
    update() {

        this.sin += .05
        // this.x += this.dx * Math.sin(this.sin)
        this.y += this.velocity
        if (this.y > this.game.height) this.markedForDeletion = true
      
    }
    draw(context) {
        
        context.drawImage(this.image,this.width * this.frameX, this.width * this.frameY, this.width, this.height, this.x, this.y, this.width, this.height)
    }

}