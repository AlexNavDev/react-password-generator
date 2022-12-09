import styled from "styled-components";

export const Section = styled.section`
  width: 90%;
  height: 150px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .error__message {
    width: 50%;
    height: 40px;
    background-color: #dc3545;
    text-align: center;
    padding: 10px;
    color: #fff;
    font-size: 1.1rem;
  }

  .container__password {
    width: 100%;
    height: 130px;
    text-align: center;
    background-color: #8090a6;

    p {
      width: 100%;
      font-size: 1.3rem;
      color: #f2f2f2;
      margin: auto;
      background-color: rgb(0, 0, 0, 0.5);

       @media (min-width: 992px) {
        width: 30%;
      }

      span {
        font-size: 1.4rem;
        color: #bfd0f3;
        font-family: "Source Serif Pro", serif;
        font-weight: bold;
        letter-spacing: 3px;
      }
    }

    .container__buttons {
      width: 100%;
      height: 100px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      button {
        width: 100px;
        height: 35px;
        border: none;
        border-radius: 5px;
        font-family: "Source Serif Pro", serif;
        font-size: 0.9rem;
      }
    }
  }
`;
