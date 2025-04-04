import styled from "styled-components"

export const Foot = styled.div `
  width: 100%;
  height: 5vh;
  background-color: var(--second-background);
  align-content: center;

  h2 {
    font-size: 1.2em;
    color: var(--text-grey-ter),
  }

  .icons {
    display: flex;
    a {
      color: var(--text-grey-ter),
    }
  }
`