import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>My GitHub Profile</strong> - a React site by{" "}
          <a href="https://github.com/KGCan" target="_blank" rel="noreferrer">
            Kirsten Canady
          </a>
          .
          <hr />
          <a
            href="https://www.linkedin.com/in/kirsten-canady-117015b7"
            target="_blank" rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          |{" "}{" "}
          <a href="http://pacificdraftworks.com/" target="_blank" rel="noreferrer">
            Company website
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;