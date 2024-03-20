import * as PIXI from 'pixi.js';
import { Loader } from './Loader';
import { MainScene } from './MainScene';
import TWEEN from '@tweenjs/tween.js';
export class App{
    run() {
        this.app = new PIXI.Application({resizeTo: window});
        document.body.appendChild(this.app.view);

        this.loader = new Loader(this.app.loader);
        this.loader.preload().then(() => {this.start()});
    }
    start() {
        this.app.ticker.add(() => {
            TWEEN.update();
        });
        this.scene = new MainScene();
        this.app.stage.addChild(this.scene.container);
        console.log(this.app.stage);
        // let bg = new PIXI.Sprite(this.app.loader.resources.bg.texture);
        // this.app.stage.addChild(bg);
    }
}