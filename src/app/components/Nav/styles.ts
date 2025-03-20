import styled from "styled-components";

export const NavBar = styled.div `
  width: 100%;
  height: 4vh;
  background-color: var(--second-background);
  display: flex;
  align-items: center;
  padding-left: 1em;
  gap: 1em;

  a {
    text-decoration: none;
    font-weight: 800;
    font-size: .83em;
    color: var(--text-grey-sec);
    letter-spacing: 1px;

    &:hover {
      color: #C0C0C0;
    }

    
  }
`