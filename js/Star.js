

export class Star {
    constructor(game) {

        this.game = game
        this.x = Math.random() * this.game.width
        this.y = Math.random() * this.game.height
        this.vY = Math.random() * 10 + 2
        this.size = Math.random() * 2 + 1
        this.color = Math.round(Math.random() * 1)
       

    }
    update() {

        if (this.y < this.game.height) {
            this.vY += this.game.speed
            this.y+= this.vY
        } else {
            this.y = -10
            this.vY = Math.random() * 10 + 1
            this.x = Math.random() * this.game.width
            this.color = Math.round(Math.random() * 900)
        }

        if (this.x < 0 || this.x > this.game.width) {
            this.y = -10
            this.vY = Math.random() * 10 + 1
            this.x = Math.random() * this.game.width
            this.color = Math.round(Math.random() * 900)
        } else {
            this.x += this.game.speedX
        }

    }
    draw(context) {

        context.beginPath();
        context.fillStyle = `rgba(255, 255, 255, 0.${this.color})`; //red
        context.strokeStyle = "transparent"
        context.arc(this.x, this.y , this.size ,0,Math.PI*2);
        context.fill();
        context.stroke();
    
    }
}