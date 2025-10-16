// main.jsx - default React entry (React 18, Vite / modern setup)
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"; // optional - replace with your main stylesheet
import { Provider } from "react-redux";
import Store from '../src/app/store'
// If you use React Router, you can import BrowserRouter here and wrap <App /> with it.
// import { BrowserRouter } from 'react-router-dom';


const container = document.getElementById("root");
const root = createRoot(container);


root.render(
<React.StrictMode>
  <Provider store={Store}>
  <App />
  </Provider>
{/* If using Router: <BrowserRouter><App /></BrowserRouter> */}

</React.StrictMode>
);