import {observable} from 'mobx'

export class NodeObject {
    @observable type: string;
    @observable x: number;
    @observable y: number;
    @observable title: string;
    @observable text?: string | null;
    @observable url?: string | null;
    @observable zIndex:number;

    constructor({type = "", x = 0, y = 0, title = "", text = null, url = null} = {}) {
        this.type = type;
        this.x = x;
        this.y = y;
        this.title = title;
        this.text = text;
        this.url = url;
        this.zIndex = 1;
    }
}