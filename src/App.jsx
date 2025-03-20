import "./index.css";

import Header from "./Components/Header.jsx";
import React from "react";
import MainPage from "./Components/MainPage.jsx";
import Image from "./Components/Image.jsx";
import Style from "./Components/Style.jsx";
import Contacts from "./Components/Contacts.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <>
      <div id="hometo"></div>
      <Header />
      <div className="container">
        <div class="content">
          <MainPage />
          <Image />
        </div>
        <div id="style"></div>
        <Style />
        <div id="contacts"></div>
        <Contacts />
      </div>
      <Footer />
    </>
  );
}

export default App;
