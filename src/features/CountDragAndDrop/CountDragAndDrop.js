import React, { Component } from 'react';
import { Game } from "../../common/styles";
import bg from "../CountIntro/images/bg.png";
import bag from "../CountIntro/images/bag.png"
import { GameContainer } from "../CountIntro/styles";
import apple from "../CountIntro/images/items/apple.svg";
import Pyro from "../../common/Pyro/Pyro";

import './style.scss';

import trueSfx from '../../common/sound/true.mp3';
import victorySfx from '../../common/sound/victory.mp3';

import loadSound from '../../common/loadSound';

import { DragDropContainer, DropTarget } from "react-drag-drop-container"
import { games } from './config';

class CountDragAndDrop extends Component {

    constructor(props){
        super(props);
        this.state = {
            idx: 0,
            finish: false
        }
    }

    droped = (e) => {
        e.containerElem.style.visibility = 'hidden';
        this.sound = new Audio(trueSfx);
        this.sound.play();
        this.sound = new Audio(victorySfx);
        this.sound.play();
        if(this.state.idx < games.length){
            setTimeout(() => {
                this.setState({idx: this.state.idx + 1});
            })
        } else {
            this.setState({finish: true});
        }
    }

    onClick = (e) => {
        this.sound = new Audio(loadSound(parseInt(e.target.dataset.mssg)));
        this.sound.play();
    }

    render() {
        const {idx} = this.state;
        return (
            <Game bg={bg} size="cover">
                <GameContainer>
                    <h2 
                        style={{paddingTop: "1rem", fontSize: "3rem", width: "100%", textAlign: "center"}}
                    >
                    Choose the food and drag and drop it in the right position
                    </h2>
                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", width:"80%"}}>
                        <DragDropContainer style={{width: "20%"}} targetKey={games[idx].question[0]}>
                            <img src={apple} alt="apple" width="100%" data-mssg={games[idx].question[0]} onClick={this.onClick} />
                        </DragDropContainer>
                        <DragDropContainer style={{width: "20%"}} targetKey={games[idx].question[1]}>
                            <img src={apple} alt="apple" width="100%" data-mssg={games[idx].question[1]} onClick={this.onClick} />
                        </DragDropContainer>
                        <DragDropContainer style={{width: "20%"}} targetKey={games[idx].question[2]}>
                            <img src={apple} alt="apple" width="100%" data-mssg={games[idx].question[2]} onClick={this.onClick} />
                        </DragDropContainer>
                    </div>

                    <DropTarget targetKey={games[idx].result} onHit={this.droped}>
                        <div style={{position: "relative"}}>
                            <h2 style={{position: "absolute", fontSize: "7rem", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}> {games[idx].result} </h2>
                            <img height="300px" src={bag} alt="bag" />
                        </div>
                    </DropTarget>
                    {this.setState.finish && <Pyro />}
                </GameContainer>
            </Game>
        );
    }
}

export default CountDragAndDrop;