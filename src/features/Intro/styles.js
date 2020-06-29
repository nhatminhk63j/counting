import styled from "styled-components";

export const CarWithBubble = styled.div`
    position: absolute;
    z-index: 1000;
    width: 90%;
    bottom: 0;
    display: flex;
    flex-direction: column;
    padding-bottom: 6%;
    @media screen and (orientation: landscape) {
        max-height: 99vh;
    }
    @media screen and (orientation: portrait) {
        padding-bottom: 20%;
    }
    @media screen and (max-height: 960px) and (orientation: portrait) {
        padding-bottom: 35%;
    }
    @media screen and (max-height: 640px) and (orientation: portrait) {
        padding-bottom: 25%;
    }
    @media screen and (max-height: 424px) {
        padding-bottom: 3%;
    }
`;
