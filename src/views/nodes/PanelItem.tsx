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
    render() {
        const node: NodeType = this.props.node;
        return (
            <div className="node text-node"
                 style={{left: node.x, top: node.y}}>
                <TopBar node={node}/>
                <div className="scroll-box">
                    <div className="content">
                        <h3 className="title">{node.title}</h3>
                        {
                            node.type === 'text' ? (
                                <div className="paragraph"
                                     dangerouslySetInnerHTML={{__html:node.text}}
                                    />
                            ) : (
                                <video src={String(node.url)} controls/>
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}