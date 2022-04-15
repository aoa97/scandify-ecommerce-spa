import { createGlobalStyle } from "styled-components";
import { container } from "../../styles/mixins";

const Global = createGlobalStyle`
    html {
        font-size: 10px;
    }

    body {
        font-family: 'Raleway', sans-serif;
        font-size: 1.4rem;
        color: ${({ theme }) => theme.colors.black};
    }

    main {
        ${container}
    }

    /* Resets */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        border: 0;
        outline: 0;
        background: none;
        font-family: inherit;
        color: inherit;
        cursor: pointer
    }
`;

export default Global;
