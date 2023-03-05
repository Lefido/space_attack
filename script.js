

import { Game } from "./js/Game.js";


window.addEventListener('load', function() {

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;



    window.addEventListener('click', function(event) {
        let x = event.x
        let y = event.y
        game.addExplosion(x, y)
   
    });

    const game = new Game(canvas.width, canvas.height)
    
    game.newStars()

   function animate() {

    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

    })

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    game.update(canvas)
    game.draw(ctx)

    requestAnimationFrame(animate)

   }

   animate()


})