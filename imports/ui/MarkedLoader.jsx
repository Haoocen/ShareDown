import React from "react";
import Script from "react-load-script";

const url = "https://cdn.jsdelivr.net/npm/marked/marked.min.js";

export default class MarkedLoader extends React.Component {
    render () {
        return (
            <Script url={url} onError={() => console.log("Marked is not working!")} />
        )
    }
}
