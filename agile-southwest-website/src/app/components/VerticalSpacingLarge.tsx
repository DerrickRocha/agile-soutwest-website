import styled from "styled-components";
import {theme} from "@/app/constants/theme";

const VerticalSpacingLargeDiv = styled.div`
    height: ${theme.padding.verticalDivSpacingLarge};
`;
export default function VerticalSpacingLarge() {
    return (
        <VerticalSpacingLargeDiv/>
    );
}