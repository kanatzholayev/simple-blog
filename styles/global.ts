import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html,
    body {
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    background: #E9EDF0;
    }

    a {
    color: inherit;
    text-decoration: none;
    }

    * {
    box-sizing: border-box;
    }
`;
