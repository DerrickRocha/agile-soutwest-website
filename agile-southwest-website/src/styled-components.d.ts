import 'styled-components';

// Extend the styled-components default theme or add props as needed
declare module 'styled-components' {
    export interface DefaultTheme {
        // Define your theme properties here
        colors: {
            primary: string;
            // Add other colors as needed
        };
        // Other theme properties...
    }

    // Add custom props for your styled components
    export interface StyledProps {
        $isOpen?: boolean; // Add any other transient props here
    }
}
