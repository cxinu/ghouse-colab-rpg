import { Application, Sprite, Container } from 'pixi.js'

const app = new Application({
    view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
    resolution: window.devicePixelRatio || 1,
  autoDensity: true,
    backgroundColor: '#6495ed',
    width: 640,
    height: 480
});

const container: Container = new Container();
container.x = app.screen.width / 2;
container.y = app.screen.height / 2;
app.stage.addChild(container);



const clampy: Sprite = Sprite.from("clampy.png");
clampy.x = 0;
clampy.y = 0;
clampy.anchor.set(0.5);
clampy.scale.set(0.2)

const bun1: Sprite = Sprite.from("https://pixijs.com/assets/bunny.png");
bun1.x = 100;
bun1.y = 0;
bun1.anchor.set(0.5);

const bun3: Sprite = Sprite.from("https://pixijs.com/assets/bunny.png");
bun3.x = 0;
bun3.y = 100;
bun3.anchor.set(0.5);

const bun5: Sprite = Sprite.from("https://pixijs.com/assets/bunny.png");
bun5.x = -100;
bun5.y = 0;
bun5.anchor.set(0.5);

const bun7: Sprite = Sprite.from("https://pixijs.com/assets/bunny.png");
bun7.x = 0;
bun7.y = -100;
bun7.anchor.set(0.5);
 
container.addChild(clampy);
container.addChild(bun1);
container.addChild(bun3);
container.addChild(bun5);
container.addChild(bun7);



app.ticker.add((delta) => {	
  container.rotation += 0.02 * delta;
  
	bun1.rotation -= 0.02 * delta;
	bun3.rotation -= 0.02 * delta;
	bun5.rotation -= 0.02 * delta;
	bun7.rotation -= 0.02 * delta;
});
