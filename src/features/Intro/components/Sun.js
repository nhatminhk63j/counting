import React, {useState} from 'react';
import styled from 'styled-components';
import {useSpring, animated} from 'react-spring';

const Sun = styled.div`
    border-radius: 50%;
    position: fixed;
    top: 3%;
    left: 45%;
    z-index: 1;
    width: 20%;
    max-width: 150px;
    img {
        width: 100%;
        opacity: 0.8;
    }
`;

export default ({img}) => {
    const [resetSun, setResetSun] = useState(false);
    const propSun = useSpring({
        from: {transform: "rotate(0deg)"},
        to: {transform: "rotate(360deg)"},
        onRest: () => setResetSun(state => !state),
        config: {duration: 20000},
        reset: resetSun
    });

    return (
        <Sun>
            <animated.img src={img} alt="sun" style={propSun} />
        </Sun>
    )
}