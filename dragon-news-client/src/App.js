import "./App.css";
import { RouterProvider } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { routes } from "./Routes/Routes/Routes";

function App() {
  return (
    <div className="">
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
