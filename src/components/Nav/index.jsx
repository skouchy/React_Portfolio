import React from "react";


function Nav() {

  return (
    <nav>
      <ul className="flex-row">
        <li className="mx-2">
          <a
            data-testid="aboutme"
            href="/"
          >
            About Me
          </a>
        </li>
        <li className="mx-2">
          <a
            data-testid="gallery"
            href="/gallery"
          >
            Gallery
          </a>
        </li>
        <li className="mx-2">
          <span href="/contact">
            Contact
          </span>
        </li>
        <a
          data-testid="resume"
          href="/resume"
        >
          Resume
        </a>
      </ul>
    </nav>
  );
}

export default Nav;
