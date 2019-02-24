import { createGlobalStyle } from 'styled-components';

export const gridAreaSelectors = `
    #intro {
        grid-area: intro;
    }

    #picture-grid {
        grid-area: picture-grid;
    }

    #portfolio {
        grid-area: portfolio;
    }

    #playground {
        grid-area: playground;
    }

    #about-site {
        grid-area: about-site;
    }

    #about-me {
        grid-area: about-me;
    }
`;

export const mediaMin600px = `
    @media only screen and (min-width: 600px) {
        font-size: 120%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-areas: 
        "intro picture-grid"
        "portfolio portfolio"
        "playground playground"
        "about-site about-me";
    }
`;

export const GlobalStyle = createGlobalStyle`
body {
    margin: 10px;
    font-family: sans-serif;
    font-size: 80%;
    color: #373737;
}
  

h1 {
  font-family: Segoe UI;
  font-weight: 700;
  font-size: 2em;
}

a {
  text-decoration: none;
  color: #000066;
}
`;
