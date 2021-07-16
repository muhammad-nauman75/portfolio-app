import React, { useEffect, useState } from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import styled from "styled-components";

const ScrollBack = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  });

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  return (
    <div>
      {show && (
        <StyledButton onClick={handleClick}>
          <ExpandLessIcon className="icon" />
        </StyledButton>
      )}
    </div>
  );
};
const StyledButton = styled.div`
  position: fixed;
  z-index: 1;
  bottom: 2vh;
  right: 5%;
  background-color: var(--background-color-3);
  cursor: pointer;
  border-radius: 50%;

  .icon {
    font-size: 3rem;
    color: white;
  }
`;

export default ScrollBack;
