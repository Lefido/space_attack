
export class InputKeys {
    constructor(game) {

        this.game = game

        // Gestion du clavier

        document.addEventListener('keydown', (e)=> {

            this.game.keys[e.code] = true

        })

        document.addEventListener('keyup', (e)=> {

            if (e.code == 'Space' && this.game.keys['Space'] === true && this.game.enemys.length != 0)  {
                this.game.player.addProjectile()
                this.game.player.addSoundShoot()
            }

            this.game.keys[e.code] = false

        })
    }
}