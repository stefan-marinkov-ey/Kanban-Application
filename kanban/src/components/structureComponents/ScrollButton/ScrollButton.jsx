import React, { useState } from "react";
import { StyledScrollButton } from "./StyleScrollButton.style.jsx";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <StyledScrollButton style={{ visibility: !visible && "hidden" }}>
      <span onClick={scrollToTop} style={{ visibility: !visible && "hidden" }}>
        ^
      </span>
    </StyledScrollButton>
  );
};

export default ScrollButton;
