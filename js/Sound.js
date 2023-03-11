
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
        this.audio.volume = 0.5

    }
}

export class SoundImpactEnemy extends Sound {
    constructor() {
        super()

        this.audio = new Audio("./assets/sounds/impact2.mp3")
        this.audio.volume = 0.5

    }
}

export class SoundExplosion extends Sound {
    constructor() {
        super()
 
        this.audio = new Audio("./assets/sounds/explosion.mp3")
        this.audio.volume = 0.5
    }
}

export class SoundSirene extends Sound {
    constructor() {
        super()
 
        this.audio = new Audio("./assets/sounds/sirene.mp3")
        this.audio.volume = 0.4
    }
}

export class SoundDanger extends Sound {
    constructor() {
        super()
 
        this.audio = new Audio("./assets/sounds/danger.mp3")
        this.audio.volume = 0.2
    }
}