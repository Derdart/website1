import React from "react";
import ImageTerm from "/Users/filipplandgraf/WEBSITE1/website-one/src/Content/terminal_screenshot.png";

function Style() {
  return (
    <>
      <div className="style" id="style">
        <div className="styletexts">
          <h1>Style.</h1>
          <p id="styletext">
            This website features a{" "}
            <span class="greentext">terminal style design</span>, reminiscent of
            classic <span class="greentext">command-line interfaces</span>. The
            aesthetic is achieved using a
            <span class="greentext"> monochromatic black background </span>
            with white, monospaced text, mimicking a developer console. The
            layout is structured with thin, white-bordered boxes, reinforcing
            the <span class="greentext">retro, low-tech appearance</span>. This
            design effectively delivers a{" "}
            <span class="greentext">retro terminal UI experience</span>,
            suitable for <span class="greentext">coding-related projects,</span>{" "}
            portfolio sites, or tech-themed web applications.
          </p>
        </div>
        <div className="styleimg">
          <img draggable="false" src={ImageTerm} alt="" />
        </div>
      </div>
    </>
  );
}

export default Style;
