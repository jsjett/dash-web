import {observable,action} from 'mobx'
import {NodeObject} from "./NodeObject";

export class PublicStore {
    @observable
    public nodes:NodeObject[] = [];

    // 添加node
    @action
    public addNodes(node:NodeObject){
        this.nodes.push(node)
    }

    // 删除node
    @action
    public removeNode(node:NodeObject){
        const index:number = this.nodes.indexOf(node);
        this.nodes.splice(index,1);
    }

}

export const publicStore = new PublicStore();