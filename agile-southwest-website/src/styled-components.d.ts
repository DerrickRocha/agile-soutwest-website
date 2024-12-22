import 'styled-components';

// Extend the styled-components default theme or add props as needed
declare module 'styled-components' {

    // Add custom props for your styled components
    export interface StyledProps {
        $isOpen?: boolean; // Add any other transient props here
    }
}
