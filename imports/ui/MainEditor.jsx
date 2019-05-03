import React from 'react';
import documents from "../api/documents";

export default class MainEditor extends React.Component {
    render () {
        return (
            <div>
                Main Editor Here
                <div>
                    <textarea name="" id="" cols="10" rows="10" />
                </div>
                <button>Preview</button>
            </div>
        )
    }
}
