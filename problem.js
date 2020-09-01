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

  let gamemask = new PIXI.Graphics();
  gamemask.beginFill(0x000000);
  gamemask.drawRect(0, 0, 260, 780);
  gamemask.y = 780;
  gamemask.endFill();

  let k = 0;
  let button = new PIXI.Graphics();
  button.beginFill(0x000000);
  button.drawRect(600, 600, 100, 100);
  button.endFill();
  button.interactive = true;
  button.buttonMode = true;
  button.on("click", onClick);

  let cherrytexture = PIXI.Texture.from("cherry.png");
  let seventexture = PIXI.Texture.from("7.png");
  let watermalontexture = PIXI.Texture.from("watermalon.png");
  let texturesarray = [cherrytexture, seventexture, watermalontexture];
  let symbolarray = [];
  container.mask = gamemask;

  let combination = [0, 0, 0];

  let speed = 20;
  let velocity = 0.5;
  let moveupspeed = 19;
  let bottommovespeed =9;

  class slotsymbol extends PIXI.Sprite {
    constructor(x, y, width, height, texture) {
      super();
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.texture = texture;
    }
  }

  /*   class symbolcontainer extends PIXI.Container {
      constructor(width, height) {
        super()
        this.width = width;
        this.height = height;
      }
    } */

  for (let i = 0; i < 4; i++) {
    let x = new slotsymbol(0, symbolwidth * i, 260, 260, texturesarray[i]);
    /*  let y = new symbolcontainer(260, 260); */
    container.addChild(x);
    symbolarray.push(x);
  }
  app.stage.addChild(container, button);

  function hello(){
 for(i=0;i<symbolarray.length;i++){
    symbolarray[i].y-=bottommovespeed;
    
 }
 bottommovespeed+=1;

 if(bottommovespeed==9){
   ticker.remove(hello)
 }
   
  }

  function movebottomthenup() {
    console.log(bottommovespeed)
    for (let i = 0; i < symbolarray.length; i++) {
      symbolarray[i].y += bottommovespeed;
      
      
  }
  bottommovespeed-=1;
  if (bottommovespeed<=0) {
    ticker.remove(movebottomthenup)
    ticker.add(hello)
  }
}
  function moveup() {
    for (i = 0; i < symbolarray.length; i++) {
      symbolarray[i].y -= moveupspeed;
      if (symbolarray[i].y <= -symbolwidth / 2) {
        ticker.remove(moveup);
        ticker.add(rotatesymbols);
      }
    }
    speed = moveupspeed;
  }

  function rotatesymbols() {
    for (let i = 0; i < symbolarray.length; i++) {
      symbolarray[i].y += speed;
      if (symbolarray[i].y >= 780) {
        symbolarray[i].y = -symbolwidth + (symbolarray[i].y - gamemask.y);
        if (i == 0) {
          symbolarray[i].texture = symbolarray[3].texture;
        } else {
          symbolarray[i].texture = symbolarray[i - 1].texture;
        }
      }
    }
    speed += velocity;
    if (speed > 60) {
      ticker.remove(rotatesymbols);
      ticker.add(stopmove);
    }
  }

  function stopmove() {
    for (let i = 0; i < symbolarray.length; i++) {
      symbolarray[i].y += speed;
      if (symbolarray[i].y >= 780) {
        symbolarray[i].y = -symbolwidth + (symbolarray[i].y - gamemask.y);
      }
      if (symbolarray[i].y >= 780 - speed && speed <= 30) {
        symbolarray[i].texture = watermalontexture;
        k++;
        if (k == 4) {
          ticker.remove(stopmove);
          ticker.add(movebottomthenup);
        }
      }
    }

    speed -= velocity;
  }
  function onClick() {
    ticker.add(moveup);
  }
};
