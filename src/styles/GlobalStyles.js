import styled, { createGlobalStyle } from 'styled-components';
import { infoColor, primaryColor, primaryDarkColor } from '../config/colors';

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        outline: none;
        box-sizing: border-box;
    }

    body {
        font-family: sans-serif;
        color: ${primaryDarkColor};
        background-color: ${primaryDarkColor};
    }

    html,body, #root {
        height: 100%;
    }

    button {
        cursor: pointer;
        background-color:${primaryColor};
        border: none;
        padding: 10px 20px;
        color: #fff;
        border-radius: 4px;
        font-weight: 700;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }
`;

export const Container = styled.section`
  max-width: 500px;
  background-color: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
