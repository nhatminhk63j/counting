import React, { Component } from 'react';

import { Game } from "../../common/styles";
import Audio from "../../common/Audio";
import bg from "./images/bg.png";
import { GameContainer} from "./styles";
import Bag from './components/Bag/Bag';

import { foods } from './config';


const items = foods.map(item => {
    return {
        name: item,
        fliped: false
    }
})

class CountIntro extends Component {
    
    render() {
        return (
            <Game bg={bg} size="cover">
                <Audio />
                <GameContainer>
                    <Bag items={items} />
                </GameContainer>
            </Game>
        );
    }
}

export default CountIntro;