import {observable,action} from 'mobx'
import {NodeType} from "../Utils/interface";

export class PublicStore {
    @observable
    public nodes:NodeType[] = [];

    // 添加你node
    @action
    public addNodes(node:NodeType){
        this.nodes.push(node)
    }

    // 删除node
    @action
    public removeNode(node:NodeType){
        const index:number = this.nodes.indexOf(node);
        this.nodes.splice(index,1);
    }

}

export const publicStore = new PublicStore();