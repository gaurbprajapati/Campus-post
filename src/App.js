import React from "react";
import Stack from "@mui/material/Stack";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route
            path={"/clubs"}
            element={<p>clubs I'm in component folder</p>}
          />
          <Route
            path={"/clubs"}
            element={<p>clubs I'm in component folder</p>}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
