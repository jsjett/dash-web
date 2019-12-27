import "./NodeView.scss";
import TopBar from "./TopBar";
import "./panel-item.scss";
import React = require("react");
import {NodeObject} from "../../stores/NodeObject";
import {observer} from 'mobx-react'
import Editor from "../editor/Editor"
import BraftEditor from 'braft-editor'

interface IProps {
    node: NodeObject;
}

@observer
export default class VideoNodeView extends React.Component<IProps, any> {



    render() {
        const node: NodeObject = this.props.node;
        return (
            <div className="node text-node"
                 style={{left: node.x, top: node.y}}>
                <TopBar node={node}/>
                <div className="scroll-box">
                    <div className="content">
                        <h3 className="title">{node.title}</h3>
                        {
                            node.type === 'text' ? (
                                <Editor editorState={
                                    BraftEditor.createEditorState(node.text)
                                }/>
                                // <p className="paragraph">{node.text}</p>
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