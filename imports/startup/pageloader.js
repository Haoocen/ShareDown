import {onPageLoad} from "meteor/server-render";
import ReactDOMServer from "react-dom/server";
import App from "../ui/App";
import React from "react";

onPageLoad(sink => {
    sink.renderIntoElementById("react-target", ReactDOMServer.renderToString(
        <App />
    ));
});