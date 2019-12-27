import React = require("react");
import "./FreeFormCanvas.scss";
import {observer,inject} from 'mobx-react'
import PanelItem from "../nodes/PanelItem";


@inject("publicStore")
@observer
export default class FreeFormCanvas extends React.Component<any, any> {

    render() {
        const {nodes} = this.props.publicStore;
        return (
            <div className="freeformcanvas-container" >
                {
                    nodes.map((node,index) => (
                        <PanelItem node={node} key={index} />
                    ))
                }

            </div>
        );
    }
}