import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider,observer,inject} from 'mobx-react';
import "./Main.scss";
import stores from './stores/index';
import  FreeFormCanvas from './views/freeformcanvas/FreeFormCanvas';
import {NodeObject} from './stores/NodeObject'

@inject("publicStore")
@observer
class Root extends React.Component<any, any>{
    componentDidMount(): void {
        let numNodes = 2;
        let maxX = 400;
        let maxY = 400;
        for (let i = 0; i < numNodes; i++) {
            this.props.publicStore.addNodes(new NodeObject({
                type:'text',
                x: Math.random() * maxX,
                y: Math.random() * maxY,
                title: "Text Node Title",
                text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
            }));
        }

        for (let i = 0; i < numNodes; i++) {
            this.props.publicStore.addNodes(new NodeObject({
                type:'video',
                x: Math.random() * maxX,
                y: Math.random() * maxY,
                title: "Video Node Title",
                url: "http://cs.brown.edu/people/peichman/downloads/cted.mp4"
            }));
        }

    }

    render(){
        return (
            <div>
                <h1>Dash Web</h1>
                <FreeFormCanvas />
            </div>
        )
    }
}

ReactDOM.render(
    <Provider {...stores}>
        <Root />
    </Provider>,
    document.getElementById('root'));