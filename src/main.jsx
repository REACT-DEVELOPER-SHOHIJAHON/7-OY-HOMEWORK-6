import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
