import styled from "styled-components";
import {theme} from "@/app/constants/theme";

export default function LayoutContainer() {
    return styled.div`
        display: flex;
        align-items: center;
        background-color: ${theme.colors.light};
        padding: 0px ${theme.padding.gutter};
    `;
}