import { DrawRectangle } from "./classes/DrawGraphics.js";
import { CreateSlotSymbol } from "./classes/CreateSlotSymbol.js";
window.onload = function () {
    let app = new PIXI.Application({
        width: 1500,
        height: 1800,
        backgroundColor: 0xffffff,
    });
    document.body.append(app.view);
    let container = new PIXI.Container();
    container.height = 780;
    container.width = 260;
    let symbolwidth = 260;
    let ticker = PIXI.Ticker.shared;
    let slotmask = new DrawRectangle(0, 0, 260, 780, 0xff700b);
    let button = new DrawRectangle(200, 200, 100, 100, 0x000000);
    let cherrytexture = PIXI.Texture.from("/bin/image/cherry.png");
    let seventexture = PIXI.Texture.from("/bin/image/7.png");
    let watermalontexture = PIXI.Texture.from("/bin/image/watermalon.png");
    let texturesarray = [cherrytexture, seventexture, watermalontexture, watermalontexture];
    let symbolarray = [];
    for (let i = 0; i <= 3; i++) {
        let x = new CreateSlotSymbol(0, symbolwidth * i, 260, 260, texturesarray[i]);
        container.addChild(x);
        symbolarray.push(x);
    }
    app.stage.addChild(button, container);
};
