import styled from "styled-components"

export const Head = styled.div `
  width: 100%;
  height: 6vh;
  background-color: var(--second-background);
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 440px) {
    height: 4.5vh;
  }

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

      @media (max-width: 440px) {
        width: 50%;
        font-size: 1em;
      }
    }

    .search {
      width: 80%;
      height: 100%;
      display: flex;
      align-items: center;

      @media (max-width: 440px) {
        justify-content: flex-end;
        margin-right: 1em;
      }

      form {
        width: 50%;
        height: 55%;
        display: flex;
        background: var(--text-grey-qua);
        color: var(--text-grey-ter);
        border: none;
        border-radius: 8px;
        margin-left: 10em;
        
        @media (max-width: 440px) {
          width: 100%;
          margin: none;
        }

        input {
          width: 90%;
          height: 100%;
          color: var(--text-grey-ter);
          background: var(--text-grey-qua);
          border: none;
          outline: 0;
          font-size: 1em;

          @media (max-width: 440px) {
            width: 80%;
            font-size: .8em;
            font-weight: 400;
          }
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

            @media (max-width: 440px) {
              font-size: 1em;
            }
          }
        }
      }
    }
  }


  .hr {
    width: 100%;
    height: .1vh;
    border: none;
    background: var(--blue-light);
  }
`