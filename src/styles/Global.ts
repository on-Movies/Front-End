import {createGlobalStyle} from 'styled-components';

export const StyledGlobal = createGlobalStyle`

    :root{
        --color-brand: #091B29;
        --color-secound: #0E2839;
        --color-white: #FFFFFF;
    }


    body{
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
        font-family: Arial, sans-serif;
        background-color: var(--color-brand);
        color: var( --color-white);
    }
`;