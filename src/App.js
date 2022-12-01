import { RouterProvider } from "react-router-dom";
import "./App.css";
import { route } from "./router/router";

function App() {
  return <RouterProvider router={route}></RouterProvider>;
}

export default App;
