export interface NodeType {
    type: string;
    x: number;
    y: number;
    title: string;
    zIndex: number;
    text?: string | null;
    url?: string | null;
    width?:number
    height?:number,
    changeSize?:any
}
