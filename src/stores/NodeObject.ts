import {observable,action} from 'mobx'

export class NodeObject {
    @observable type: string;
    @observable x: number;
    @observable y: number;
    @observable title: string;
    @observable text?: string | null;
    @observable url?: string | null;
    @observable zIndex: number;
    @observable width: number;
    @observable height: number;

    constructor({type = "", x = 0, y = 0, title = "", text = null, url = null} = {}) {
        this.type = type;
        this.x = x;
        this.y = y;
        this.title = title;
        this.text = text;
        this.url = url;
        this.zIndex = 1;
        this.width = 300;
        this.height = 300;
    }

    @action changeSize(x:number,y:number):void{
        if(x < 0){
            this.width = 0;
        }else {
            this.width = x;
        }
        if(y < 0){
            this.height = 0;
        }else {
            this.height = y;
        }
    }
}