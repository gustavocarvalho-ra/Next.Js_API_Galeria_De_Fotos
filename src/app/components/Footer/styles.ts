import styled from "styled-components"

export const Foot = styled.div `
  width: 100%;
  height: 4vh;
  background-color: var(--second-background);
  display: flex;
  align-items: center;
  color: var(--text-grey-ter);

  h3 {
    font-size: .8em;
  }

  h2 {
    font-size: .8em;
  }

  .icons {
    display: flex;
    a {
      color: var(--text-grey-ter);
    }
  }
`