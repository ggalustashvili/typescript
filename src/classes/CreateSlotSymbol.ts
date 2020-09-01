import { Texture } from "pixi.js";


export class CreateSlotSymbol extends PIXI.Sprite{
    constructor(x:number, y:number, width:number, height:number,texture:Texture) {
        super();
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.texture=texture;
      }
}