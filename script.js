import React from "react";
import {createRoot} from "react-dom/client";

{/* <div id='parent'>
    <div id="child">
        <h1 id="heading1"><span></span></h1>
    </div>
     <div id="child">
        <h1 id="heading1"><span></span></h1>
    </div>
</div> */}


const parent = React.createElement("div", {id:"parent"}, [
    React.createElement("div", {className:"child"}, 
        React.createElement("h1", {id:"heading1"},React.createElement("span", {}, "H1 inside span" ) 
    ) ),
    React.createElement("div", {className:"child"}, 
        React.createElement("h1", {id:"heading2"},React.createElement("span", {}, "H2 inside span" ) 
    ) )
])
const heading = React.createElement(
    "h1",
    {id:"heading", className:"head"},  //this object allow us to write attribute in the tag we created
    "Hello World from React!"
);
console.log(parent); // it will give us an object inside which we have props that contains the attribute
const root = createRoot(document.getElementById("root"));
root.render(parent); // render function is converting React element(object) into a HTML tag or real DOM nodes.
