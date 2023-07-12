import React from "react";
import useFetch from "./hooks/useFetch";
import Table from "./components/Table";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import DetailPage from "./components/DetailPage";



function App() {

  const url = "https://take-home-exercise-api.herokuapp.com/meters";
  const API_KEY = "4118cfab9b7ffe6c9e82e8a6c1158a2a52e79401c77d39fd272857cb0c70233d";

  const { data: dataInfo } = useFetch(
     url, API_KEY
  );
  

  return (
    <Routes>
      <Route index element={<Table url={url} apiKey={API_KEY} />}></Route>
      <Route path=":id" element={<DetailPage dataInfo={dataInfo}/>}></Route>
    </Routes>
  );
}

export default App;
