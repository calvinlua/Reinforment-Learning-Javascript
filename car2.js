class  car2{
    constructor (x,y,width,height){
    this.controls.enabe
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;

    this.speed=0;
    this.acceleration=0.2;
    this.maxspeed=3;
    this.friction=0.05;
    this.angle=0;

    this.controls=new Controls(enable_arrow=true);

}



update(){
    this.#move();
}



    #move(){
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

        if (this.speed!=0){
            
            /*implement multiply by -1 if speed is not positive ,to flip left and right directions when reverse*/
            const flip=this.speed>0?1:-1;

            /*move follow 4 quarant unit circle, move left & right */
            if(this.controls.left){
                this.angle+=0.03*flip;
            }

            if(this.controls.right){
                this.angle-=0.03*flip;
            }
        }
        this.x-=Math.sin(this.angle)*this.speed;
        this.y-=Math.cos(this.angle)*this.speed;
               

    }

    draw(ctx){
        ctx.save();

        /*translate to the point where rotation is centered at */
        ctx.translate(this.x,this.y);
        ctx.rotate(-this.angle);

        /* did translation, no longer need to put this.x-this.width/2 and etc*/ 
        ctx.beginPath();
        ctx.rect(
            -this.width/2,
            -this.height/2,
            this.width,
            this.height

        );

        ctx.fill();

        ctx.restore();
    }
}