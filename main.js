/*link to your canvas */
const canvas=document.getElementById("myCanvas");

canvas.width=200; /*200 pixels*/

/*get drawing context or tools */
const ctx = canvas.getContext("2d");
const road= new Road (canvas.width/2,canvas.width);
const car=new Car(100,100,30,50); /* 100x,100y,30 width ,50 height*/
car.draw(ctx);

animate();

function animate(){
    car.update();

    canvas.height=window.innerHeight;
   
    car.draw(ctx);
    road.draw(ctx);
    /*calls the animate function many times per sec*/ 
    requestAnimationFrame(animate);
}

