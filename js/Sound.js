
export class Sound {
    constructor() {

        this.markedForDeletion = false

    }

    lecture() {
        this.audio.play()
        this.markedForDeletion = true
    }
}


export class SoundShootPlayer extends Sound {
    constructor() {
        super()

        this.audio = new Audio("./assets/sounds/shootplayer.wav")

    }
}

export class SoundImpactEnemy extends Sound {
    constructor() {
        super()

        this.audio = new Audio("./assets/sounds/impact2.mp3")

    }
}

export class SoundExplosion extends Sound {
    constructor() {
        super()
 
        this.audio = new Audio("./assets/sounds/explosion.mp3")

    }
}