import React from 'react';
import NavBar from "./NavBar";
import Editor from "./Markdown/Editor";
import Previewer from "./Markdown/Previewer";
export default class App extends React.Component {
    render () {
        return (
            <div>
                <NavBar />
                <div>
                    <Editor />
                    <Previewer />
                </div>
            </div>
        )
    }
}