import React from "react";
import Image from "/Users/filipplandgraf/WEBSITE1/website-one/src/Content/HelloWorldImg.png";

function MainPage() {
  return (
    <>
      <div class="main" id="home">
        <h1>Hello.</h1>
        <p id="hellotext"></p>
        <img draggable="false" src={Image} />
      </div>
    </>
  );
}

export default MainPage;
