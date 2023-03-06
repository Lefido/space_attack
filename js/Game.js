
import { Star } from "./Star.js"
import { InputKeys } from "./InputKeys.js"
import { Explosion1, Explosion2, Explosion3 } from "./Explosion.js"
import { Player } from "./Player.js"
import { Enemy } from "./Enemy.js"
import { Impact_1, Impact_2, Impact_3, Impact_4 } from "./Impact.js"

export class Game {
    constructor(width, height) {
        this.width = width
        this.height = height
        this.stars = []
        this.keys = []
        this.explosions = []
        this.impacts = []
        this.enemys = []
        this.player = new Player(this)
        this.inputKey = new InputKeys(this)
        this.speed = 0
        this.speedX = 0
        this.timerEnemy = 0
        this.audio = new Audio('./assets/explosion/explosion.ogg')
        
    }
    update() {
        // Add Enemy
        this.timerEnemy++
        if (this.timerEnemy % 200 === 0 && this.enemys.length === 0) this.addEnemy()
        // Etoiles filantes
        this.stars.forEach(star => { star.update() })
        // Projectiles
        this.player.projectiles.forEach(projectile => {
            projectile.update()
        })
        this.player.projectiles =  this.player.projectiles.filter(projectile => !projectile.markedForDeletion)
        // player
        this.player.update() 
        // Enemy
        this.enemys.forEach(enemy => enemy.update())
        this.enemys = this.enemys.filter(enemy => !enemy.markedForDeletion)
        // Impact
        this.impacts.forEach(impact => impact.update())
        this.impacts.filter(impact => !impact.markedForDeletion)
        // Explosion
        this.explosions.forEach(explode => explode.update())
        this.explosions = this.explosions.filter(explode => !explode.markedForDeletion )
        // Check collision projectile player
        this.player.projectiles.forEach (projectile => {

            this.enemys.forEach( enemy => {
                if (this.checkCollision(projectile, enemy)) {
                    enemy.life--
                    this.addImpact(projectile.x, projectile.y)
                    if (enemy.life < 1) {
                        enemy.markedForDeletion = true
                        this.addExplosion(enemy.x, enemy.y)
                
                    }
                    
                    projectile.markedForDeletion = true
                    
                    console.log('Enemy touché')
                }

            })

        })

    }
    draw(context) {
        // Etoiles filantes
        this.stars.forEach(star => { star.draw(context) })
        // Projectile
        this.player.projectiles.forEach(projectile =>  projectile.draw(context))
        // Player
        this.player.draw(context)
        // Enemy
        this.enemys.forEach(enemy => enemy.draw(context))
        // Impact
        this.impacts.forEach(impact => impact.draw(context))
         // Explosion
         this.explosions.forEach(explode => explode.draw(context))

    }
    newStars() {

        for (let i = 0; i < 100; i++) {
            this.stars.push(new Star(this))
        }

    }

    addEnemy() {
        let numberEnemy = Math.random() * 10
        for (let i = 0; i < numberEnemy; i++) {
            let y = (0  - this.player.height) - i * this.player.height
            this.enemys.push(new Enemy(this, this.player.x, y))
        }

        this.timerEnemy = 0
       

    }

    addExplosion(x, y) {

        this.audio.play();

        let numberExplosion = Math.floor(Math.random() * 5 + 2)

        let typeExplosion = Math.random() * 1

        if (typeExplosion < 0.33) {
            for (let i = 0; i < numberExplosion; i++) {
                this.explosions.push(new Explosion1(x,y))
            }
        } else if (typeExplosion < 0.66) {
            for (let i = 0; i < numberExplosion; i++) {
                this.explosions.push(new Explosion2(x,y))
            }
        } else if (typeExplosion < 1) {
            for (let i = 0; i < numberExplosion; i++) {
                this.explosions.push(new Explosion3(x,y))
            }
        }

    }

    addImpact(x, y) {

        let typeExplosion = Math.random() * 1

        if (typeExplosion < 0.25) {
           this.explosions.push(new Impact_1(x,y))
        } else if (typeExplosion < 0.50) {
            this.explosions.push(new Impact_2(x,y))
        } else if (typeExplosion < 0.75) {
            this.explosions.push(new Impact_3(x,y))
        } else if (typeExplosion < 1) {
            this.explosions.push(new Impact_4(x,y))
        }

    }

    checkCollision(rect1, rect2) {
        return ( rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y<rect2.y + rect2.height &&
            rect1.y + rect1.height > rect2.y)

    }
    
}