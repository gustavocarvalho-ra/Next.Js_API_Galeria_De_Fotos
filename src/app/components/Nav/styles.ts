import styled from "styled-components";

export const NavBar = styled.div `
  width: 100%;
  height: 4vh;
  background-color: var(--second-background);
  display: flex;
  align-items: center;
  padding-left: 1em;
  gap: 2em;

  @media (max-width: 440px) {
    display: none;
  }

  a {
    padding: .8em;
    height: 100%;
    text-decoration: none;
    font-weight: 800;
    font-size: .83em;
    color: var(--text-grey-sec);
    letter-spacing: 1px;
    position: relative;
    align-content: center;

    &:hover {
      color: var(--text-grey-ter);
    }

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 100%;
      height: 1px;
      background: var(--blue-light);
      transform: scaleX(0);
      transform-origin: right;
      transition: transform .4s;
    }

    &:hover::after {
      transform: scaleX(1);
      transform-origin: left;
      transition: transform .4s;
    }
  }

  a.active {
    color: var(--blue-light);
    background: var(--background);
  }
`