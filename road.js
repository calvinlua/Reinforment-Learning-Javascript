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


draw(ctx){
    ctx.lineWidth=5;
    ctx.strokeStyle="white";
    
    /* move brush to top left , draw to bottom left*/ 
    ctx.beginPath();
    ctx.moveTo(this.left,this.top);
    ctx.lineTo(this.left,this.bottom);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.right,this.top);
    ctx.lineTo(this.right,this.bottom);
    ctx.stroke();

}
}