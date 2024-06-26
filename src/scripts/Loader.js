import { LoaderConfig } from "./LoaderConfig";
import { Globals } from "./Globals";
export class Loader{
    constructor(loader){
        this.loader = loader;
        this.resources = LoaderConfig;
    }
    preload() {
        // this.loader.add('bg', bg);
        return new Promise(resolve => { 
            for (let key in this.resources) {
                this.loader.add(key, this.resources[key]);
            }
            this.loader.load((loader, resources) => {
                Globals.resources = resources;
                console.log('resources', resources);
                resolve();
            });
        });
       
    }
}