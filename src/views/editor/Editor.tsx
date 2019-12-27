import React = require("react");
// 引入编辑器组件
import BraftEditor from 'braft-editor'
// 引入编辑器样式
import 'braft-editor/dist/index.css'

interface IProps {
    editorState: any
}

export default class Editor extends React.Component<IProps,any>{
    constructor(props) {
        super(props);
        this.state = {
            controls:[
                'bold', 'italic',
                'list-ul', 'list-ol'
            ]
        }
    }
    render(){
        const {controls} = this.state;
        const {editorState} = this.props;
        return (
            <BraftEditor  value={editorState} controls={controls} />
        )
    }
}