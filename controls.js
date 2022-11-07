class Controls{
    constructor(){
        this.forward=false;
        this.left=false;
        this.right=false;
        this.reverse=false;
    
        /*method inside control class*/ 
        this.#addKeyboardListeners();
    }

/* # means private metho,cant access outside the class*/ 
#addKeyboardListeners(){

    document.onkeydown=(event)=>{
        switch(event.key){
            /*use wasd to control */
            case "w":
                this.forward=true;
                break;
            case "s":
                this.reverse=true;
                break;
            case"a":
                this.left=true;
                break;
            case"d":
                this.right=true;
                break;

            /*use arrow keys to control */
            case "ArrowLeft":
                this.left=true;
                break;
            case "ArrowRight":
                this.right=true;
                break;
            case "ArrowUp":
                this.forward=true;
                break;
            case "ArrowDown":
                this.reverse=true;
                break;

        }
        /*for debugging purposes,output to console*/
        console.table(this);

    }

    /*"function(event)" is same as "(event)=> ", you can use "this" after using the latter function, so that constructor knows*/ 
    document.onkeyup=(event)=>{
        switch(event.key){
            case "ArrowLeft":
                this.left=false;
                break;
            case "ArrowRight":
                this.right=false;
                break;
            case "ArrowUp":
                this.forward=false;
                break;
            case "ArrowDown":
                this.reverse=false;
                break;

        }
        console.table(this);
    }

}
}