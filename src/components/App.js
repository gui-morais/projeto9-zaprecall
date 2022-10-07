import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import MainPage from "./MainPage";
import InitialPage from "./InitialPage";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<InitialPage />} />
      <Route path="/mainpage" element={<MainPage />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}
