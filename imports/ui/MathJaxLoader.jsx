import React from "react";
import Script from "react-load-script";

const url = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML";

export default class MathJaxLoader extends React.Component {
    configMathJax () {
        MathJax.Hub.Config({
            extensions: ["tex2jax.js"],
            jax: ["input/TeX", "output/HTML-CSS"],
            tex2jax: {
                inlineMath: [ ['$','$'], ["\\(","\\)"] ],
                displayMath: [ ['$$','$$'], ["\\[","\\]"] ],
                processEscapes: true
            },
            "HTML-CSS": { fonts: ["TeX"] }
        });
    }
    render () {
        return (
            <Script url={url} onLoad={() => this.configMathJax()} onError={() => console.log("bad man.")} />
        )
    }
}
