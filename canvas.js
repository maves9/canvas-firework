window.onload = function(){



var canvas = document.querySelector('canvas');

var c = canvas.getContext('2d');



canvas.height = window.innerHeight;

canvas.width = window.innerWidth;



window.addEventListener('resize', function(event){

canvas.height = window.innerHeight;

canvas.width = window.innerWidth;

});





var mouse = {

  x: undefined,

  y: undefined

}



window.addEventListener('mousemove', function(event){

  mouse.x = event.x;

  mouse.y = event.y;



});





window.onclick = function(x, y){

  var x =   mouse.x;

  var y =   mouse.y;

    exp(x, y);



};





function exp(x, y){



var particles = {},

    particleIndex = 0,

    particleNum = 4;



  c.fillStyle = "#222";

  c.fillRect(0,0,canvas.width, canvas.height);



function Particle(){

  this.x = mouse.x;

  this.y = mouse.y;

  this.vx = Math.random() * 10 - 5;

  this.vy = Math.random() * 10 - 5;

  this.gravity = 0.3;

  particleIndex++;

  particles[particleIndex] = this;

  this.id = particleIndex;

  this.life = 0;

  this.maxLife = Math.random() * 10 + 50;

  this.color = "hsl("+parseInt(Math.random()*255, 10)+",90%,50%)"

  }



  Particle.prototype.draw = function() {

  this.x += this.vx;

  this.y += this.vy;







  this.life++;



  if (this.life >= this.maxLife) {

    delete particles[this.id];

  }



  c.fillStyle = this.color;

  c.fillRect(this.x, this.y, 5, 5);

  };







  function animate(){

    requestAnimationFrame(animate);



      c.globalCompositeOperation = "source-over";

      c.fillStyle = "rgba(34,34,34,0.2)";

      c.fillRect(0,0,canvas.width, canvas.height);



      for (var i = 0; i < particleNum; i++) {

      new  Particle();

      }



      c.globalCompositeOperation = "ligther";



        for (var i in particles) {

          particles[i].draw();

        }



  }

  animate();





  setTimeout(function(){

    particleNum = [];

  }, 300);



  };



}

File contents are unchanged.
