import React, { useState } from "react";
import { Button } from "./Styles";

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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  window.addEventListener("scroll", toggleVisible);
  return (
    <Button>
      <div
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      >
        <span class="m_scroll_arrows one"></span>
        <span class="m_scroll_arrows two"></span>
        <span class="m_scroll_arrows three"></span>
      </div>
    </Button>
  );
};

export default ScrollButton;
