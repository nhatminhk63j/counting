import React, { useState } from "react";

import Car from "./components/Car/Car";
import Bubble from "./components/Bubble/Bubble";
import House from "./components/House/House";
import Rain from "./components/Rain";
import Sun from "./components/Sun";
import Ballon from "./components/Ballon";
import Bird from "./components/Bird";
import Rainbow from "./components/Rainbow";

import { useImagesContext } from "../../contexts/ImagesContext";

import {CarWithBubble} from  "./styles";

export default props => {
    const [selectedGame, setSelectedGame] = useState(false);
    const { images } = useImagesContext();
    const selectGameHandler = game => {
        setSelectedGame(true);
        setTimeout(() => props.history.push("/" + game), 1500);
    };

    return (
        <>
            <Sun img={images["sun.svg"]} />
            <Ballon img={images["ballon.svg"]} />
            <Bird />
            <House />
            <Rain img={images["rain.svg"]} />
            <Rainbow img={images["rainbow.png"]} />
            <CarWithBubble>
                <Bubble selectedGame={selectedGame} selectGame={selectGameHandler} />
                <Car selectedGame={selectedGame} />
            </CarWithBubble>
        </>
    );
};
