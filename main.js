/*link to your canvas */
const canvas=document.getElementById("myCanvas");

canvas.width=200; /*200 pixels*/

/*get drawing context or tools */
const ctx = canvas.getContext("2d");
/*center, and put at width */
const road= new Road (canvas.width/2,canvas.width*0.9);
const car=new Car(road.getLaneCenter(3),100,30,50); /* 100x,100y,30 width ,50 height*/
car.draw(ctx);

animate();

function animate(){
    car.update();

    canvas.height=window.innerHeight;
    /*this decide the order of front and back layering  */
    road.draw(ctx);
    car.draw(ctx);
    /*calls the animate function many times per sec*/ 
    requestAnimationFrame(animate);
}

