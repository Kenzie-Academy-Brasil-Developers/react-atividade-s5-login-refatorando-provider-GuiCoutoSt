import styled from "styled-components";

const Container = styled.div`
  width: 310px;

  label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;
    font-size: 1.2rem;
    font-weight: 600;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 2px solid var(--black);
    border-radius: 5px;
  }

  input:focus {
    outline: none;
    border: 2px solid var(--green);
  }

  input::placeholder {
    font-family: "Poppins", sans-serif;
    font-size: 0.8rem;
    font-style: italic;
  }

  input:focus::placeholder {
    opacity: 0;
    transition: 0.3s;
    transform: translateX(5px);
  }

  input:not(:focus)::placeholder {
    transition: 0.3s;
  }

  .input__error {
    padding: 2px;
    border-radius: 5px;
    font-weight: 600;
    font-size: 0.8rem;
    background-color: var(--light-red);
    color: var(--dark-red);
  }
`;

export default Container;
