class Road{

    
    constructor(x,width,lanecount=3){
    this.x=x;
    this.width=width;
    this.lanecount=lanecount;

    this.left=x-width/2;
    this.right=x+width/2;

    const infinity=1000000;
    this.top=-infinity;
    this.bottom=infinity;

    }

    /*Define the center of the lane as lane number varies*/
    getLaneCenter(laneIndex){
        const laneWidth=this.width/this.lanecount;
        return this.left+laneWidth/2+Math.min()(laneIndex,this.lanecount-1)*laneWidth;
    }


    draw(ctx){
        ctx.lineWidth=5;
        ctx.strokeStyle="white";

            /*draw lanes*/
            for (let i=0;i<=this.lanecount;i++)
            { /*lerp= linear interpolation,interpolate left and right by percentage i/lanecount*/
                const x=lerp(
                    this.left,
                    this.right,
                    i/this.lanecount
                );

                if(i>0 && i<this.lanecount){
                    /*draw dash lines 20 pixel and break 20 pixels*/
                    ctx.setLineDash([20,20]);}
                else
                {ctx.setLineDash([]); }
            

            /* draw the side lanes */
            
            /* move brush to x & top  , draw to  x & bottom */ 
                ctx.beginPath();
                ctx.moveTo(x,this.top);
                ctx.lineTo(x,this.bottom);
                ctx.stroke();

            }
        }
}


