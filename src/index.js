import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Bootstrap
import "./bootstrap.scss";

// Bootstrap Icon
import "bootstrap-icons/font/bootstrap-icons.scss";

import "@splidejs/react-splide/css/sea-green";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
