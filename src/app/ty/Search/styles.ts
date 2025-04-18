import styled from "styled-components"

export const Wind = styled.div `
  width: 95%;
  min-height: 74.3vh;
  /* background-color: red; */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 3em 5em 4em 5em;
  gap: 1.8em;

  h2 {
    color: var(--text-grey-ter);
    
    span {
      color: var(--blue-light);
    }
  }

  .mainWin {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`