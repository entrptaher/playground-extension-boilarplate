let randomId = "abc123";

import "./styles/style.scss";

function createDiv(divId) {
  if (!document.getElementById(divId)) {
    const div = document.createElement("div");
    div.id = divId;
    document.body.insertBefore(div, document.body.firstChild);
  }
}

// Start of the content script
import React from "react";
import ReactDOM, { render } from "react-dom";
import "./fontawesome.jsx";

class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <i className="fas fa-camera" /> Test 1
          </li>
          <li>
            <i className="fas fa-camera-retro" /> Test 2
          </li>
          <li>
            <i className="fas fa-check-square" /> Test 3
          </li>
        </ul>
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

  // hard reset current page
  location.reload();
} else {
  createDiv(randomId);
  ReactDOM.render(<App />, document.getElementById(randomId));
}
