import React from "react";

const curretYear = new Date().getFullYear();
function Footer() {
  return (
    <footer>
      <p>Copyright © {curretYear}</p>
    </footer>
  );
}

export default Footer;
