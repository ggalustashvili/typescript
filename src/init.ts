import { DrawRectangle } from "./classes/DrawGraphics.js";
import { CreateSlotSymbol } from "./classes/CreateSlotSymbol.js";
import { Texture, Sprite } from "pixi.js";

window.onload = function () {
  let app: PIXI.Application = new PIXI.Application({
    width: 1500,
    height: 1800,
    backgroundColor: 0xffffff,
  });

  document.body.append(app.view);
  
  let container: PIXI.Container = new PIXI.Container();
  container.height = 780;
  container.width = 260;

  let symbolwidth: number = 260;

  let ticker: PIXI.Ticker = PIXI.Ticker.shared;
  let slotmask:DrawRectangle = new DrawRectangle(0, 0, 260, 780, 0xff700b);
  let button:DrawRectangle = new DrawRectangle(200, 200, 100, 100, 0x000000);

  let cherrytexture = PIXI.Texture.from("/bin/image/cherry.png");
  let seventexture = PIXI.Texture.from("/bin/image/7.png");
  let watermalontexture = PIXI.Texture.from("/bin/image/watermalon.png");
  let texturesarray:Array <Texture>= [cherrytexture, seventexture, watermalontexture,watermalontexture];
  let symbolarray:Array<Sprite>=[];


  for(let i =0;i<=3;i++){
    let x = new CreateSlotSymbol(0, symbolwidth * i, 260, 260, texturesarray[i])
    container.addChild(x);
    symbolarray.push(x);
  }



  app.stage.addChild(button,container);
};
