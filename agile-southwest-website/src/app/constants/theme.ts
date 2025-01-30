import {red} from "next/dist/lib/picocolors";

export const theme = {
    colors: {
        primary: '#003366',
        secondary: '#BB8903',
        accent: '#803300',
        white: '#FFFFFF',
        light: '#F5F5F5',
        dark: '#007186',
        gray: '#707070',
        alertRed: '#EE4B2B'
    },
    fonts: {
        hero: 'Avenir, sans-serif',
        links: 'Verdana, sans-serif',
        heading: 'Arial, sans-serif',
        body: '"Roboto", sans-serif',
        arial: 'Arial, sans-serif',
        roboto: 'Roboto, sans-serif'
    },
    breakpoints: {
        mobile: '540px',
        tablet: '768px',
        smallDesktop: '1024px',
        standardDesktop: '1440px',
        largeDesktop: '1920px'
    },
    padding: {
        verticalDivSpacingLarge: '40px',
        verticalDivSpacingSmall: '22px',
        mobileGutter: '16px',
        gutter: '70px',
        gutterLarge: '320px',
        cardBodyPadding: '22px',
        cardSpacing: '15px',
    },
    dimensions: {
        headerHeight: '80px',
        footerHeight: '80px',
        navListGap: '20px',
        navListBottomMargin: '16px',
        cardWidth: '280px',
        cardHeight: '550px',
        tabletCardHeight: '450px',
        borderRadius: '8px',
        smallDesktopCardHeight: '470px',
        standardDesktopCardHeight: '485px',
    },
    textSize: {
        heroHeading1Large: '71px',
        heroHeading1Small: '48px',
        heroHeading2Large: '48px',
        heroHeading2Small: '32px',
        heading1: '28px',
        heading2: '22px',
        heading3: '18px',
        subHeading: '14px',
        body: '18px',
        links: '18px'
    }
};