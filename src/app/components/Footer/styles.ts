import styled from "styled-components"

export const Foot = styled.div `
  width: 100%;
  height: 4vh;
  background-color: var(--second-background);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
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
      display: flex;
      align-items: center;
      font-size: 1.5em;
      margin: 0 .5em 0 .5em;
      color: var(--text-grey-ter);
    }
  }
`