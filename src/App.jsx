import "./App.css";
import "./index.css";

import Header from "./Header.jsx";
import React from "react";
import MainPage from "./MainPage.jsx";
import Image from "./Image.jsx";
import Style from "./Style.jsx";
import Contacts from "./Contacts.jsx";

function App() {
  return (
    <>
      <div id="niga"></div>
      <Header />
      <div class="content">
        <MainPage />
        <Image />
      </div>
      <div id="style"></div>
      <Style />
      <div id="contacts"></div>
      <Contacts />
    </>
  );
}

export default App;
