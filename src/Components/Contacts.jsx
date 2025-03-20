import React from "react";
import ImageGH from "/Users/filipplandgraf/WEBSITE1/website-one/src/Content/awd.png";

function Contacts() {
  return (
    <>
      <div className="contacts">
        <div>
          <h1>Contacts.</h1>
          <p id="contactstext">
            <b>Here are the ways to contact me:</b>
            <br />
            <br />
            Email (click to copy):
            <br />{" "}
            <span
              onClick={() => {
                navigator.clipboard.writeText("landgraf.filipp.work@gmail.com");
                alert("Email copied to clipboard");
              }}
              class="greentext"
            >
              landgraf.filipp.work@gmail.com
            </span>
            <br />
            <br />
            Telegram: <br />
            <a href="https://t.me/FL_Link">
              <span class="greentext">@FL_Link</span>
            </a>
            <br />
            <br />
            Website: <br />
            <a href="https://filipplandgraf.framer.website/">
              <span class="greentext">
                https://filipplandgraf.framer.website/
              </span>
            </a>
            <br />
            <br />
            GitHub: <br />
            <a href="https://github.com/Derdart/">
              <span class="greentext">https://github.com/Derdart/</span>
            </a>
          </p>
        </div>
        <div className="imgcontact">
          <a target="_blank" href="https://github.com/Derdart/">
            <img src={ImageGH} alt="" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Contacts;
