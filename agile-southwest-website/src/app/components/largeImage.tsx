import styled from "styled-components";
import {theme} from "@/app/constants/theme";

interface LargeImageProps {
    imageUrl: string
}

const ImageDiv = styled.img`
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

export default function LargeImage(props: LargeImageProps) {
    return (
        <ImageDiv src={props.imageUrl}/>
    )
}