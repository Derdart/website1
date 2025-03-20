import React from "react";

function Header() {
  var i = 0;
  var speed = 0.5;
  var hellotxt =
    "This is a simple example of a website built with React. It has a header and a main page. The header has a title and a navigation bar. The main page has a title and a paragraph.";

  function typeWriterHello() {
    if (i < hellotxt.length) {
      document.getElementById("hellotext").innerHTML += hellotxt.charAt(i);
      i++;
      setTimeout(typeWriterHello, speed);
    }
  }

  window.onload = function () {
    typeWriterHello();
  };

  return (
    <div class="header">
      <h1 id="header">
        Terminal <b></b>
      </h1>

      <ul>
        <a onClick={typeWriterHello} href="#hometo">
          <li>
            <h2>home</h2>
          </li>
        </a>
        <a href="#button">
          <li>
            <h2>style</h2>
          </li>
        </a>
        <a href="#contacts">
          <li>
            <h2>contacts</h2>
          </li>
        </a>
      </ul>
    </div>
  );
}

export default Header;
