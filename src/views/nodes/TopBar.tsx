
import "./NodeView.scss";
import React = require("react");
import {NodeType} from "../../Utils/interface";
import {inject,observer} from 'mobx-react'
import {PublicStore} from "../../stores/PublicStore";

interface IProps {
    node: NodeType;
    publicStore?:PublicStore
}

@inject("publicStore")
@observer
export default class TopBar extends React.Component<IProps, any>{

    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
            l: 0,
            t: 0,
            isDown: false
        }
    }

    onMouseDown = (e): void => {
        // 获取x坐标和y坐标
        const x = e.clientX;
        const y = e.clientY;
        const node = this.props.node;
        //获取左部和顶部的偏移量
        const l = node.x;
        const t = node.y;
        this.setState({
            x,
            y,
            l,
            t,
            //开关打开
            isDown: true
        })
    }
    componentWillUnmount(): void {
        window.removeEventListener("mousemove",this.onmousemove);
    }

    componentDidMount(): void {
        window.addEventListener("mousemove",this.onmousemove)
    }

    onmousemove = (e): void => {
        const {node} = this.props;
        if (this.state.isDown === false) {
            return;
        }
        const {x,y,l,t} = this.state;
        //获取x和y
        const nx = e.clientX;
        const ny = e.clientY;
        //计算移动后的左偏移量和顶部的偏移量
        const nl = nx - (x - l);
        const nt = ny - (y - t);
        node.x = nl;
        node.y = nt;
    }

    onMouseUp = (e): void => {
        this.setState({isDown: false})
    }

    handleRemove = ():void => {
        this.props.publicStore.removeNode(this.props.node);
    }
    
    render() {
        return (
            <div className="top" onMouseDown={this.onMouseDown}
                 onMouseUp={this.onMouseUp}>
               <span style={{ color:"#c09" }} onClick={this.handleRemove}>ssss</span>
            </div>
        );
    }
}