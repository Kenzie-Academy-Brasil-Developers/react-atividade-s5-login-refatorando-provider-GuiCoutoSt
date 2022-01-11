import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  border: 2px solid var(--black);
  border-radius: 5px;

  h1 {
    margin-bottom: 20px;
    font-size: 2.5rem;
    font-weight: 800;
    text-align: center;
  }

  p {
    font-style: italic;
    font-size: 0.9rem;
    text-align: center;
  }

  form {
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
  }

  button:hover {
    transition: 0.3s;
    background-color: var(--black);
    color: var(--white);
    cursor: pointer;
  }
`;

export default Container;
