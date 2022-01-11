import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 2px solid var(--black);
  border-radius: 5px;

  h1 {
    margin-bottom: 20px;
    font-size: 2.5rem;
    font-weight: 800;
    text-align: center;
  }

  button {
    width: fit-content;
    margin-top: 20px;
    padding: 10px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 1.1rem;
    border: 2px solid var(--black);
    border-radius: 5px;

    background-color: var(--white);
    color: var(--black);
  }

  button:hover {
    transition: 0.3s;
    border-color: var(--white);
    background-image: linear-gradient(to right, var(--orange), var(--yellow));
    color: var(--white);
    cursor: pointer;
  }

  button:not(:hover) {
    transition: 0.3s;
  }
`;

export default Container;
