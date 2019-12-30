import "./NodeView.scss";
import TopBar from "./TopBar";
import "./panel-item.scss";
import React = require("react");
import {NodeObject} from "../../stores/NodeObject";
import {observer} from 'mobx-react'

interface IProps {
    node: NodeObject;
}

@observer
export default class VideoNodeView extends React.Component<IProps, any> {



    render() {
        const node: NodeObject = this.props.node;
        // @ts-ignore
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
                                     spellCheck="false"
                                     dangerouslySetInnerHTML={{__html:node.text}}
                                     contentEditable="true" />
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