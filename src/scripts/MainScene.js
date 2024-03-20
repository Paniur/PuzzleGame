import * as PIXI from 'pixi.js';
import { Globals } from './Globals';
import { PuzzelGrid } from './PuzzelGrid';
export class MainScene {
    constructor() {
        this.container = new PIXI.Container();
        Globals.resources.music.sound.play({
            loop: true,
            volume: 0.5
        });
        this.createBackground();
        this.createPuzzelGrid();
    }
    createBackground() {
        this.bg = new PIXI.Sprite(Globals.resources["bg"].texture);
        this.bg.width = window.innerWidth;
        this.bg.height = window.innerHeight;
        this.bg.anchor.set(0.5);
        this.bg.x = window.innerWidth / 2;
        this.bg.y = window.innerHeight / 2;
        console.log('bg', this.bg);
        this.container.addChild(this.bg);
    }
    createPuzzelGrid() {
        const grid = new PuzzelGrid();
        this.container.addChild(grid.container);
    }
}