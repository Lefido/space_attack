

import { Game } from "./js/Game.js";

window.addEventListener('load', function() {

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth
    canvas.height = 800 //window.innerHeight

    window.addEventListener('click', (event)=> {
        let x = event.x
        let y = event.y
        game.addExplosion(x, y)
   
    });

    window.addEventListener('resize', ()=> {
        game.width = window.innerWidth
        game.height = 800 //window.innerHeight

    })

    const game = new Game(canvas.width, canvas.height)
    
    game.newStars()

    if (game.soundActif) game.music.play()
    game.music.loop = true
    
   function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    game.update(canvas)
    game.draw(ctx)

    requestAnimationFrame(animate)

   }

   animate()


})