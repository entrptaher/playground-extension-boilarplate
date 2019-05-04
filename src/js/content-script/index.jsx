let randomId = "abc123";

import "./styles/style.scss";

function createDiv(divId) {
  if (!document.getElementById(divId)) {
    const div = document.createElement("div");
    div.id = divId;
    document.body.appendChild(div);
  }
}

// Start of the content script
import React from "react";
import ReactDOM, { render } from "react-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <p> Hello React Project</p>
      </div>
    );
  }
}

if (window._EXT_ICON_CLICKED == null) {
  window._EXT_ICON_CLICKED = 0;
}
++window._EXT_ICON_CLICKED;
if (window._EXT_ICON_CLICKED > 1) {
  // remove on second icon click
  delete window._EXT_ICON_CLICKED;
  ReactDOM.unmountComponentAtNode(document.getElementById(randomId));
  document.getElementById(randomId).remove();
} else {
  createDiv(randomId);
  ReactDOM.render(<App />, document.getElementById(randomId));
}
