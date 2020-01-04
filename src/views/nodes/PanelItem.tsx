import "./NodeView.scss";
import TopBar from "./TopBar";
import "./panel-item.scss";
import React = require("react");
import {NodeType} from "../../types/interface";
import {observer} from 'mobx-react'

interface IProps {
    node: NodeType;
}

@observer
export default class VideoNodeView extends React.Component<IProps, any> {
    constructor(props) {
        super(props)
        this.state = {
            x: 0,
            y: 0,
            initWidth:0,
            initHeight:0,
            isDown: false
        }
    }

    onPointerDown = (e): void => {
        e.stopPropagation();
        e.preventDefault();
        const x = e.clientX;
        const y = e.clientY;
        const {node} = this.props;
        this.setState({
            x,
            y,
            isDown: true,
            initWidth:node.width,
            initHeight:node.height
        })
    }

    onPointerUp = (e): void => {
        this.setState({isDown: false})
    }

    onPointMove = (e): void => {
        if (this.state.isDown === false) {
            return;
        }
        const {x, y,initWidth,initHeight} = this.state;
        const {node} = this.props;
        //获取移动后的x和y
        const nx = e.clientX;
        const ny = e.clientY;
        const nw = nx - x;
        const nh = ny - y;
        // console.log(initWidth+nw,initHeight+nh);
        node.changeSize(initWidth+nw,initHeight+nh);
    }

    componentWillUnmount(): void {
        window.addEventListener("mouseup", this.onPointerUp)
        window.removeEventListener("mousemove", this.onPointMove);
    }

    componentDidMount(): void {
        window.addEventListener("mouseup", this.onPointerUp)
        window.addEventListener("mousemove", this.onPointMove)
    }

    render() {
        const node: NodeType = this.props.node;
        return (
            <div className="node text-node"
                 style={{left: node.x, top: node.y,width:node.width,height:node.height}}>
                <TopBar node={node}/>
                <div className="scroll-box">
                    <div className="content">
                        <h3 className="title">{node.title}</h3>
                        {
                            node.type === 'text' ? (
                                <div className="paragraph"
                                     spellCheck="false"
                                     contentEditable="true"
                                     dangerouslySetInnerHTML={{__html: String(node.text)}}
                                />
                            ) : null
                        }
                        {
                            node.type === 'video'?(
                                <video src={String(node.url)} controls/>
                            ):null
                        }
                        {
                            node.type === 'pdf' ? (
                                <iframe
                                    src={`./pdfjs-2.2.228-dist/web/viewer.html?file=${String(node.url)}`}
                                    width="100%"
                                    height="100%"
                                />
                            ):null
                        }
                    </div>
                </div>
                <div className="scale"
                    onMouseDown={this.onPointerDown}
                    />
            </div>
        );
    }
}