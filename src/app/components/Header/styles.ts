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
      transition: all .3s;

      &:hover {
        color: var(--text-grey-qua);
      }
    }

    .search {
      width: 80%;
      height: 100%;
      display: flex;
      align-items: center;

      form {
        width: 50%;
        height: 55%;
        display: flex;
        background: var(--text-grey-qua);
        color: var(--text-grey-ter);
        border: none;
        border-radius: 8px;

        input {
          width: 90%;
          height: 100%;
          color: var(--text-grey-ter);
          background: var(--text-grey-qua);
          border: none;
          outline: 0;
          font-size: 1em;
        }
  
        .lup {
          display: flex;
          align-items: center;
          background: transparent;
          border: none;
          font-size: 1em;
          cursor: pointer;
          padding: 0 .6em 0 .6em;

          svg {
            position: relative;
            font-size: 1.5em;
            color: #fff;
          }
        }
      }
    }
  }


  .hr {
    width: 100%;
  }
`