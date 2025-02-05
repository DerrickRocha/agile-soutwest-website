import styled from "styled-components";
import Image from "next/image";
import { theme } from "@/app/constants/theme";

interface LargeImageProps {
    imageUrl: string;
}

const StyledImage = styled(Image)`
    width: 100%;
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: ${theme.breakpoints.standardDesktop}) {
        width: 85%;
    }
    @media (min-width: ${theme.breakpoints.largeDesktop}) {
        width: 100%;
    }
`;

export default function LargeImage({ imageUrl }: LargeImageProps) {
    return (
        <StyledImage
            src={imageUrl}
            alt="Large Image"
            width={1400} // Adjust based on actual image size
            height={800}  // Adjust based on aspect ratio
        />
    );
}