import styled from "styled-components";
import {theme} from "@/app/constants/theme";

const VerticalSpacingSmallStyle = styled.div`
    height: ${theme.padding.verticalDivSpacingSmall};
`;
export default function VerticalSpacingSmall() {
    return (
        <VerticalSpacingSmallStyle/>
    );
}