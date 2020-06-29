import styled from "styled-components";

import bag from "../../images/bag.png";
import filter from "../../images/filter.svg";


export const Container = styled.div`
  grid-area: cart;
  // background-image: url(${bag});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  // padding-top: 15%;
  position: relative;
  width: 100%;
  height: 100%;
  .gray {
    filter: url(${filter}#grayscale);
    filter: gray;
    -webkit-filter: grayscale(1);
  }
  padding: 5%;
  div {
    width: 20%;
    height: 20%;
    text-align: center;
    img {
        width: 50%;
    }
  }

  .item {
    position: relative;

    h4 {
      font-size: 3rem;
      font-weight: 900;
      position: absolute;
      top: -30%;
      left: 46%;
    }
  }

  .scale {
    transform: scale(1.2);
    transision: all 0.2s;
  }

  .shake-scale {
    animation: shake 1.5s; 

    /* When the animation is finished, start again */
  }


  @keyframes shake {
    0% { transform: translate(1px, 1px) rotate(0deg) scale(1.02); }
    10% { transform: translate(-1px, -2px) rotate(-1deg) scale(1.04); }
    20% { transform: translate(-3px, 0px) rotate(1deg) scale(1.06); }
    30% { transform: translate(3px, 2px) rotate(0deg) scale(1.08); }
    40% { transform: translate(1px, -1px) rotate(1deg) scale(1.1); }
    50% { transform: translate(-1px, 2px) rotate(-1deg) scale(1.12); }
    60% { transform: translate(-3px, 1px) rotate(0deg) scale(1.14); }
    70% { transform: translate(3px, 1px) rotate(-1deg) scale(1.16); }
    80% { transform: translate(-1px, -1px) rotate(1deg) scale(1.18); }
    90% { transform: translate(1px, 2px) rotate(0deg) scale(1.2); }
    100% { transform: translate(1px, -2px) rotate(-1deg) scale(1.22); }
  }

  @media screen and (max-width: 768px) {
    padding: 60% 5% 30% 5%;
    .item h4 {
      font-size: 1rem;
    }

    .bird-bottom {
      display: none;
      transform: scale(0.3);
    }
  }
`;
