import styled from "styled-components"

export const Head = styled.div `
  width: 100%;
  height: 6vh;
  background-color: var(--second-background);
  display: flex;
  align-items: center;
  flex-direction: column;

  .cont {
    width: 100%;
    display: flex;
    align-items: center;

    a {
      width: 20%;
      color: var(--background);
      color: grey;
      font-weight: 900;
      padding: .5em 1em;
      text-decoration: none;
      font-size: 1.5em;
    }

    .search {
      width: 80%;
      height: 100%;
      align-content: center;

      input {
        width: 50%;
        height: 60%;
        border: none;
        background: var(--background);
        border-radius: 8px;
      }
    }
  }


  .hr {
    width: 100%;
  }
`