import styled from "styled-components"

export const Gall = styled.div `
  width: 95%;
  height: 100%;
  /* background-color: red; */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 5em 5em 4em 5em;
  gap: 1.8em;

  .windowGallery {
    display: grid;
    grid-gap: 1.4em;
    grid-template-columns: repeat(3, 1fr);
    align-items: start;

    @media (max-width: 440px) {
      grid-template-columns: repeat(1, 1fr);
    }

    .cln {
      display: flex;
      flex-direction: column;
      gap: 1.4em;
    
      .image {
        display: flex;
        transition: all .5s;

        &:hover {
          scale: 1.02;
        }
  
        a {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`