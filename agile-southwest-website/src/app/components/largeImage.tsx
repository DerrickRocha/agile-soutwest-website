import Image from "next/image";
import styled from "styled-components";
import {theme} from "@/app/constants/theme";

interface LargeImageProps {
    imageUrl: string;
    altText: string;
    width?: number;
    height?: number;
}

const ImageWrapper = styled.div`
    width: 100%;
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

export default function LargeImage({ imageUrl, altText, width = 1200, height = 800 }: LargeImageProps) {
    return (
        <ImageWrapper>
            <Image
                src={imageUrl}
                alt={altText}
                width={width}
                height={height}
                layout="responsive"
                priority
            />
        </ImageWrapper>
    );
}
