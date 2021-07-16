import React from "react";
import styled from "styled-components";

const Hamburger = ({ manuOpen, setManuOpen }) => {
  return (
    <HamburgerStyled
      className={manuOpen && "active"}
      onClick={() => {
        setManuOpen(!manuOpen);
      }}
    >
      <div></div>
      <div></div>
      <div></div>
    </HamburgerStyled>
  );
};
const HamburgerStyled = styled.div`
  display: none;
  width: 38px;
  height: 32px;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  @media (max-width: 700px) {
    display: flex;
  }
  div {
    height: 5px;
    width: 100%;
    background-color: var(--font-color-2);
    border-radius: 15px;
    transform-origin: left;
    transition: all 0.5s ease;
  }
  &.active {
    div {
      &:first-child {
        transform: rotate(405deg);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:last-child {
        transform: rotate(-403deg);
      }
    }
  }
`;

export default Hamburger;
