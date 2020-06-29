import React, { Component } from 'react';
import { Game } from "../../common/styles";
import Bag from "./components/Bag";
import bg from "../CountIntro/images/bg.png";
import { GameContainer } from "../CountIntro/styles";

import {foods} from "../CountIntro/config";

let items = foods.map((item) => {
    return {
        name: item,
        selected: false
    }
})

class CountSelect extends Component {
    render() {
        return (
            <Game bg={bg} size="cover">
                <GameContainer>
                    <Bag items={items} />
                </GameContainer>
            </Game>
        );
    }
}

export default CountSelect;