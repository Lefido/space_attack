
import { Acceleration } from "./Acceleration.js"
import { Projectile_1, Projectile_2, Projectile_3, Projectile_4, Projectile_5} from "./Projectile.js"
import { SoundShootPlayer } from "./Sound.js";

export class Player {
    constructor(game) {

        this.game = game
        this.image = document.getElementById('player')
        this.frameWidth = 316
        this.frameHeight = 496
        this.frameMaxX = 8
        this.frameX = 0
        this.frameY = 0
        this.width = 60
        this.height = 80
        this.timerFrame = 0
        this.velocity = 6
        this.gravity = 1
        this.x = this.game.width / 2 - this.width / 2
        this.y = this.game.height - this.height - 10
        this.accelerations = []
        this.projectiles = []
        this.shoots = []
        this.life = 100
       
    }
    update() {

        // Gestion du clavier

        if (this.game.keys['ArrowUp'] && this.y > 0) {
            this.y -= this.velocity
            this.game.speed = 0.2
            this.addAcceleration()
        } else if (this.game.keys['ArrowUp'] === false) this.game.speed = 0

        if (this.game.keys['ArrowDown'] && this.y < this.game.height - this.height - 10) {
            this.y += this.velocity
        }

        if (this.game.keys['ArrowLeft'] && this.x > 0) {
            this.x -= this.velocity
            this.game.speedX = 1
        }

        if (this.game.keys['ArrowRight'] && this.x < this.game.width - this.width) {
            this.x += this.velocity
            this.game.speedX = -1
        } 

        if (this.game.keys['ArrowLeft'] === false && this.game.keys['ArrowRight'] === false )  this.game.speedX = 0


        // Update acceleration
        this.accelerations.forEach(acceletation=> acceletation.update())
        this.accelerations = this.accelerations.filter(acceleration => !acceleration.markedForDeletion);

        
        this.timerFrame++

        if (this.timerFrame % 2 === 0) {
            this.frameX++
            this.timerFrame = 0
            if (this.frameX >= this.frameMaxX) this.frameX = 0
        }


    }
    draw(context) {
        // Acceleration
        this.accelerations.forEach(acceletation => acceletation.draw(context))
        // Vaisseau
        context.drawImage(this.image,this.frameX * this.frameWidth, this.frameY * this.frameHeight, this.frameWidth, this.frameHeight, this.x, this.y, this.width, this.height)
        // Barre de vie
        context.fillStyle = "red"
        context.rect(10, 10, this.life * this.width / 100, 5)
        context.fill()

    }

    addAcceleration() {
        let nbParticule = 2
        let distance = 12
        for (let i = 0; i < nbParticule; i++) {
            this.accelerations.push(new Acceleration(this.x + this.width * 0.05, this.y + this.height + distance))
        }

        for (let i = 0; i < nbParticule; i++) {
            this.accelerations.push(new Acceleration(this.x + this.width * 0.93, this.y + this.height + distance))
        }
    }

    addProjectile() {

        let numProjectile = Math.random() * 1
        this.shoots.push(this.shootPlayer)

        if (numProjectile < 0.20) {
            this.projectiles.push(new Projectile_1(this.game, this.x + this.width * 0.5 , this.y))
        } else if ( numProjectile < 0.40) {
            this.projectiles.push(new Projectile_2(this.game, this.x + this.width * 0.5, this.y))
        } else if ( numProjectile < 0.60) {
            this.projectiles.push(new Projectile_3(this.game, this.x + this.width * 0.5, this.y))
        } else if ( numProjectile < 0.80) {
            this.projectiles.push(new Projectile_4(this.game, this.x + this.width * 0.05, this.y+ 35))
            this.projectiles.push(new Projectile_4(this.game, this.x + this.width * 0.92, this.y+ 35))
        } else if ( numProjectile < 1) {
            this.projectiles.push(new Projectile_5(this.game, this.x + this.width * 0.05, this.y+ 35))
            this.projectiles.push(new Projectile_5(this.game, this.x + this.width * 0.92, this.y+ 35))
        }


    }


    addSoundShoot() {
        this.game.sounds.push(new SoundShootPlayer())
    }

}