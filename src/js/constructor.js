import React from "react";
import ReactDOM from "react-dom/client";

import { Constructor } from "./components/Constructor.jsx";

function initConstructor() {
  const rootWrap = document.getElementById("constructor");
  if (!rootWrap) {
    return;
  }
  const root = ReactDOM.createRoot(rootWrap);
  root.render(
    <React.StrictMode>
      <Constructor />
    </React.StrictMode>
  );
}

export { initConstructor };
