import React, { Component } from 'react';
import { Game } from "../../common/styles";
import bg from "../CountIntro/images/bg.png";
import { GameContainer } from "../CountIntro/styles";
import './style.scss';

import trueSfx from '../../common/sound/true.mp3';
import falseSfx from '../../common/sound/false.mp3';
import victorySfx from '../../common/sound/victory.mp3';

import loadSound from '../../common/loadSound';

import { arr } from './config';

const styleContainer = {
    display: "flex", alignItems: "center", justifyContent: "center", 
    width: "100%", height: "100%", flexWrap: "wrap"
};

const styleItem = {
    width: "15%", height: "15%", margin: "2.5%",
    display: "flex", alignItems: "center", 
    justifyContent: "center", fontSize: "4rem",
    borderRadius: "2rem",
    cursor: "pointer"
};


class CountSelectButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            listItems: [...arr.map(item => { return {value: item, selected: false} })],
            index: 1
        }

        this.trueSound = new Audio(trueSfx);
        this.victorySound = new Audio(victorySfx);
    }

    onClick = (e) => {
        if (this.state.index === parseInt(e.target.dataset.mssg)) {
            let idx = this.state.listItems.map(item => item.value).indexOf(this.state.index);
            let newListItems = [...this.state.listItems];
            let newItem = {
                ...newListItems[idx],
                selected: true
            };
            this.trueSound = new Audio(trueSfx);
            this.trueSound.play();
            this.numberSound = new Audio(loadSound(this.state.index));
            this.numberSound.play();
            
            this.setState({ listItems: [...newListItems.slice(0, idx), newItem, ...newListItems.slice(idx + 1)], index: this.state.index + 1 });
        } else {
            this.falseSound = new Audio(falseSfx);
            this.falseSound.volume = 0.1;
            this.falseSound.play();
        }
    }

    componentDidUpdate(){
        if(this.state.index === 21) {
            // redirect man tiep theo
            this.victorySound.play();
        }
    }

    render() {
        return (
            <Game bg={bg} size="cover">
                <GameContainer>
                    <h2 style={{paddingTop: "1rem", fontSize: "3rem", width: "100%", textAlign: "center"}}>Please select the numbers in turn from 1 to 20!</h2>
                    <div style={styleContainer}>
                        {
                            this.state.listItems.map((item) => {
                                return (
                                    <div 
                                        style={styleItem}
                                        className={item.selected ? 'selected' : 'not-selected'}
                                        data-mssg={item.value}
                                        onClick={this.onClick}
                                        key={item.value}
                                    >
                                        <h2 data-mssg={item.value}>{item.value}</h2>
                                    </div>
                                )
                            })
                        }
                    </div>
                </GameContainer>
            </Game>
        );
    }
}

export default CountSelectButton;