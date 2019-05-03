import React from 'react';
import '../lib/marked';
import MarkedLoader from "./MarkedLoader";

export default class MainRenderer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mdSource: '# Jude Gao is cool.'
        }
    }

    render () {
        setTimeout(this.parse,1000);
        return (
            <div>
                <MarkedLoader />
                <button onClick={ () => alert('dick') } >Test</button>
            </div>
        )
    }
}


