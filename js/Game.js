
import { Star } from "./Star.js"
import { InputKeys } from "./InputKeys.js"
import { Explosion1, Explosion2, Explosion3 } from "./Explosion.js"
import { Player } from "./Player.js"
import { Enemy } from "./Enemy.js"
import { Impact_1, Impact_2, Impact_3, Impact_4 } from "./Impact.js"
import { SoundImpactEnemy, SoundExplosion, SoundDanger, SoundSirene } from "./Sound.js"
import { Planet_1, Planet_2, Planet_3,
    Planet_4, Planet_5, Planet_6, Planet_7, Planet_8,
    Galaxy_1, Galaxy_2,
    Nuage } from "./Planet.js"

export class Game {
    constructor(width, height) {
        this.width = width
        this.height = height
        this.stars = []
        this.keys = []
        this.planets = []
        this.explosions = []
        this.impacts = []
        this.enemys = []
        this.sounds = []
        this.accelerations = []
        this.player = new Player(this)
        this.inputKey = new InputKeys(this)
        this.speed = 0
        this.speedX = 0
        this.timerEnemy = 0 
        this.soundActif = true
        this.music = new Audio('./assets/sounds/music.mp3')
        this.score = 0
        this.timerPlanet = 0
        this.numProjectile = 0
        
    }
    update() {
        // Add Enemy
        this.timerEnemy++
        this.timerPlanet++
       
        if (this.timerEnemy % 200 === 0 && this.enemys.length === 0) this.addEnemy()
        // Planet
        if (this.timerPlanet % 1000 === 0 && this.planets.length < 2) {
            this.addPlanet()
        }
        this.planets.forEach(planet => planet.update())
        this.planets = this.planets.filter(planet => !planet.markedForDeletion)
        // Etoiles filantes
        this.stars.forEach(star => { star.update() })
        
         // Update acceleration
         this.accelerations.forEach(acceletation=> acceletation.update())
         this.accelerations = this.accelerations.filter(acceleration => !acceleration.markedForDeletion);
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
                    enemy.life -= projectile.degat
                    this.sounds.push(new SoundImpactEnemy())
                    this.addImpact(projectile.x, projectile.y)
                    this.score += projectile.degat
                    this.numProjectile++
                    
                    if (enemy.life < 1) {
                        // this.score += enemy.lifeMax
                        enemy.markedForDeletion = true
                        this.addExplosion(enemy.x + enemy.width * 0.5, enemy.y + enemy.height * 0.5)
                        this.numProjectile += 10
                
                    }
                    projectile.markedForDeletion = true
                    console.log(this.numProjectile)
                }

            })

        })
        // Check Collision Player Enemy
        this.enemys.forEach( enemy => {
            if (this.checkCollision(enemy, this.player)) {
                this.player.life -= enemy.life / 2
                if (this.player.life <= 0) this.player.life = this.player.lifeMax
                enemy.markedForDeletion = true
                this.addExplosion(enemy.x + enemy.width * 0.5, enemy.y + enemy.height * 0.5)
                this.numProjectile -= 50
                if (this.numProjectile <= 0 ) {
                    this.numProjectile = 0
                }
                
                console.log(this.numProjectile)
            }
        })

        //Sounds
        this.sounds.forEach(sound => {
            if (this.soundActif) sound.lecture()
            sound.markedForDeletion = true
        })
        this.sounds = this.sounds.filter(sound => !sound.markedForDeletion)

    }
    draw(context) {
        // Planets
        this.planets.forEach(planet => planet.draw(context))
        // Etoiles filantes
        this.stars.forEach(star => { star.draw(context) })
        // Barre de vie et score
        context.beginPath()
        context.font = '24px serif';
        context.textAlign = "left"
        context.fillStyle = "white"
        context.fillText('Score : ' + this.score, 10, 25);
        context.closePath()

        context.beginPath()
        context.fillStyle = "gray"
        context.rect(10, 40, this.player.lifeMax * (this.player.width * 1.6) / 100, 10)
        context.fill()
        context.closePath()

        context.beginPath()
        let radial = context.createRadialGradient(0,50,0,50,100,100);
        
        radial.addColorStop(0,'#FF3349'); //rouge
        radial.addColorStop(1,'#5BFF33'); //vert
        
        // radial.addColorStop(2, '#FF3349'); //Rouge
        context.fillStyle = radial
        context.rect(10, 40, this.player.life * (this.player.width * 1.6) / 100, 10)
        context.fill()
        context.closePath()
        
        // Acceleration
        this.accelerations.forEach(acceletation => acceletation.draw(context))
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

    addPlanet() {

        let numPlanet = Math.floor(Math.random() * 11 + 1)
        
        // let numPlanet =  10 // Math.floor(Math.random() * 8 + 1)
        // console.log(numPlanet)

        switch(numPlanet) {
            case 1:
                this.planets.push(new Planet_1(this))
                break
            case 2:
                this.planets.push(new Planet_2(this))
                break
            case 3:
                this.planets.push(new Planet_3(this))
                break
            case 4:
                this.planets.push(new Planet_4(this))
                break
            case 5:
                this.planets.push(new Planet_5(this))
                break
            case 6:
                this.planets.push(new Planet_6(this))
                break
            case 7:
                this.planets.push(new Planet_7(this))
                break
            case 8:
                this.planets.push(new Planet_8(this))
                break
            case 9:
                this.planets.push(new Galaxy_1(this))
                break
            case 10:
                this.planets.push(new Galaxy_2(this))
                break
            case 11:
                this.planets.push(new Nuage(this))
                break
        }

        this.timerPlanet = 0
    }

    addEnemy() {


        this.sounds.push(new SoundSirene())

        let numberEnemy = Math.random() * 10
        for (let i = 0; i < numberEnemy; i++) {
            let y = (0  - this.player.height) - i * this.player.height
            this.enemys.push(new Enemy(this))
        }

        this.timerEnemy = 0
       
    }

    addExplosion(x, y) {

        this.sounds.push(new SoundExplosion())

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