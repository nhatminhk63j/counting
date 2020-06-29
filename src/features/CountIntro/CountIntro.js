import React, { Component } from 'react';

import { Game } from "../../common/styles";
// import Bird from "../../common/Bird/Bird";
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
                <GameContainer>
                    <Bag items={items} />
                </GameContainer>
                {/* <div
                    className="bird-bottom"
                >
                    <Bird />
                </div> */}
            </Game>
        );
    }
}

export default CountIntro;