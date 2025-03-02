import React from "react";
import {createRoot} from "react-dom/client";
import {Header} from "./components/Header";
import Body from "./components/Body";


// App Layout 
const AppLayout = () => {
    return (
      <div>
        <Header/>
        <Body/>
      </div>
    )
}

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout/>); // render function is converting React element(object) into a HTML tag or real DOM nodes.
