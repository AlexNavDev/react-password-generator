import styled from "styled-components";

export const Form = styled.form`
  width: 90%;
  height: 460px;
  margin: auto;
  background-color: #323859;

  .switch {
    --button-width: 3.5em;
    --button-height: 2em;
    --toggle-diameter: 1.5em;
    --button-toggle-offset: calc(
      (var(--button-height) - var(--toggle-diameter)) / 2
    );
    --toggle-shadow-offset: 10px;
    --toggle-wider: 3em;
    --color-grey: #cccccc;
    --color-green: #4296f4;

    width: 300px;
    height: 40px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: #85d982;
    letter-spacing: 1px;

    span {
      width: 150px;
    }

    .slider {
      display: inline-block;
      width: var(--button-width);
      height: var(--button-height);
      background-color: var(--color-grey);
      border-radius: calc(var(--button-height) / 2);
      position: relative;
      transition: 0.3s all ease-in-out;

      &::after {
        content: "";
        display: inline-block;
        width: var(--toggle-diameter);
        height: var(--toggle-diameter);
        background-color: #fff;
        border-radius: calc(var(--toggle-diameter) / 2);
        position: absolute;
        top: var(--button-toggle-offset);
        transform: translateX(var(--button-toggle-offset));
        box-shadow: var(--toggle-shadow-offset) 0
          calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, 0.1);
        transition: 0.3s all ease-in-out;
      }
    }

    & input[type="checkbox"]:checked + .slider {
      background-color: var(--color-green);
    }

    & input[type="checkbox"]:checked + .slider::after {
      transform: translateX(
        calc(
          var(--button-width) - var(--toggle-diameter) -
            var(--button-toggle-offset)
        )
      );
      box-shadow: calc(var(--toggle-shadow-offset) * -1) 0
        calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, 0.1);
    }

    & input[type="checkbox"] {
      display: none;
    }
    & input[type="checkbox"]:active + .slider::after {
      width: var(--toggle-wider);
    }

    & input[type="checkbox"]:checked:active + .slider::after {
      transform: translateX(
        calc(
          var(--button-width) - var(--toggle-wider) -
            var(--button-toggle-offset)
        )
      );
    }
  }

  .container__form--input {
    width: 100%;
    height: 80px;
    background-color: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;

    label {
      width: 220px;
      letter-spacing: 1px;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-weight: bold;

      input {
        width: 170px;
        height: 50px;
        border: none;
        padding: 10px;
      }
    }
  }

  .container__form--options {
    width: 90%;
    height: 250px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    @media (min-width: 992px) {
      width: 70%;
    }
  }

  .container__form--capitalize {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      width: 140px;

      @media (min-width: 992px) {
        width: 250px;
      }
    }
  }

  .container__form--button {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;

    button {
      width: 150px;
      height: 35px;
      border: none;
      border-radius: 5px;
      font-family: 'Source Serif Pro', serif;
      font-size: .9rem;
    }
  }

  
`;
