import styled from "styled-components"

export const Foot = styled.div `
  width: 100%;
  height: 4vh;
  background-color: var(--second-background);
  display: flex;
  align-items: center;

  h2 {
    font-size: 1em;
    color: var(--text-grey-ter);
  }

  .icons {
    display: flex;
    a {
      color: var(--text-grey-ter);
    }
  }
`