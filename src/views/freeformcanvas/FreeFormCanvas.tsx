import React = require("react");
import "./FreeFormCanvas.scss";
import {observer,inject} from 'mobx-react';
import PanelItem from "../nodes/PanelItem";
import {NodeObject} from '../../stores/NodeObject';


@inject("publicStore")
@observer
export default class FreeFormCanvas extends React.Component<any, any> {
    addNode = ():void => {
        this.props.publicStore.addNodes(new NodeObject({
            type:'text',
            x: Math.random() * 400,
            y: Math.random() * 400,
            title: "Text Node Title",
        }))
    }
    render() {
        const {nodes} = this.props.publicStore;
        return (
            <div className="freeformcanvas-container">
                <div 
                    style={{color:"#c09",fontSize:"24px",textAlign:"right",cursor:"pointer"}}
                    onClick={this.addNode}
                > 
                    + 
                </div>
                {
                    nodes.map((node,index) => (
                        <PanelItem node={node} key={index} />
                    ))
                }

            </div>
        );
    }
}