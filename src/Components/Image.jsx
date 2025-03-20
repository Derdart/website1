import React from "react";
import dino from "/Users/filipplandgraf/WEBSITE1/website-one/src/Content/dinosaur-game-seeklogo.png";

function Image() {
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function Anim() {
    document.getElementById("dino").className = "dinoanim";
    await sleep(500);
    document.getElementById("dino").className = "dinono";
  }

  return (
    <div class="image">
      <div class="img">
        <img class="dinono" id="dino" src={dino} alt="" />
      </div>
      <div class="button" onClick={Anim}>
        <p id="button">Click</p>
      </div>
    </div>
  );
}

export default Image;
