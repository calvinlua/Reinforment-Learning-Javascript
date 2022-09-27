class  Car{
    constructor (x,y,width,height){
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;

    this.speed=0;
    this.acceleration=0.2;
    this.maxspeed=3;
    this.friction=0.05;
    this.angle=0;

    this.controls=new Controls();

}

    update(){
        if(this.controls.forward){
            /*this.y-=2; jog*/
            this.speed+=this.acceleration;
        }

        if(this.controls.reverse){
            /*this.y+=2; jog*/
            this.speed-=this.acceleration;
        }

        /* limit speed */
        if (this.speed>this.maxspeed){
            this.speed=this.maxspeed;
        }
        /* -ve means going in reverse,-ve behind equal sign */ 
        if (this.speed<-this.maxspeed){
            this.speed=-this.maxspeed/2;
        }
        /*add friction to forward & reverse */
        if (this.speed>0){
            this.speed-=this.friction;
        }
        if (this.speed<0){
            this.speed+=this.friction;
        }
        /*absolute value speed less than friction, then car stop instead of gliding due to friction*/ 
        if(Math.abs(this.speed)<this.friction){
            this.speed=0;
        }

        if(this.controls.left){
            this.angle+=0.03;
        }

        if(this.controls.right){
            this.angle-=0.03;
        }

        this.y-=this.speed;

    }

    draw(ctx){
        ctx.save();
        ctx.translate(this.x,this.y);
        this.rotate(-this.angle);


        ctx.beginPath();
        ctx.rect(
            this.x-this.width/2,
            this.y-this.height/2,
            this.width,
            this.height

        );

        ctx.fill();
        ctx.restore();
    }
}