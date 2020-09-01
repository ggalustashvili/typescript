export class DrawRectangle extends PIXI.Graphics {
    

    constructor(x:number, y:number,width:number,height:number,color:number){
        super()
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.beginFill(color);
        this.drawRect(x,y,width,height)
        this.endFill();
    }
}

