import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <footer>
        <p>CopyrightÂ© {currentYear}</p>
      </footer>
    </div>
  );
};

export default Footer;
