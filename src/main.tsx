import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import App from "./App";
import { JsonProvider } from "./contexts/JsonContext";

import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <JsonProvider>
      <App />
      <Toaster position="bottom-center" reverseOrder={false} />
    </JsonProvider>
  </React.StrictMode>
);
