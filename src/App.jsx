import React from "react";
import "./App.css";
import { GlobalContext } from "./context";
import { router } from "./routers";
import { RouterProvider } from "react-router-dom";

function App() {
  const user = {
    username: "Ajis Dzalparo",
  };
  return (
    <React.StrictMode>
      <GlobalContext.Provider value={user}>
        <RouterProvider router={router}></RouterProvider>
      </GlobalContext.Provider>
    </React.StrictMode>
  );
}

export default App;

