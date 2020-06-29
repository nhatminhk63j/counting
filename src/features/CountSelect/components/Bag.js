import React, { useState, useEffect } from 'react';
import { useImagesContext } from "../../../contexts/ImagesContext";
import { Container } from "../../CountIntro/components/Bag/styles";
import { animated } from "react-spring";
import { Redirect } from "react-router-dom";

import { games } from "../config";

let turn = 0;

function Bag(props){
    const { images } = useImagesContext();
    const [ listItems, setListItems ] = useState([...props.items]);
    const [ next, setNext ] = useState(false);
    const [ number, setNumber ] = useState(0);
    
    const onClick = (e) => {
        let index = e.target.dataset.mssg;
        const [...newListItems] = listItems;
        if(newListItems[index].selected){
            setNumber(preNum => preNum - 1);
        } else {
            setNumber(preNum => preNum + 1);
        }
        newListItems[index].selected = !newListItems[index].selected;
        setListItems(newListItems);
        
    }

    useEffect(() => {
        console.log(number);
        if ( games[turn] === number) {
            setTimeout(() => {
                setNext(true);
            }, 2000);
        }
    }, [number])

    useEffect(() => {
        if (next) {
            setListItems([...props.items.map(item => {
                return {
                    ...item,
                    selected: false
                }
            })]);
            setNumber(0);
            turn++;
            setNext(false);
        }
    }, [next])

    if (turn >= games.length) {
        return (
            <Redirect to="/count-drag-and-drop" />
        )
    } else {
        return (
            <div style={{width: "100%", height: "90%", fontSize: "3rem"}}>
                <h3 style={{position: "absolute", width: "100%", textAlign: "center"}}><u>Tap and count 1 - {games[turn]}</u></h3>
                <Container>
                    {
                        listItems.map((item, i) => {
                            return (
                                <animated.div key={`p${i}`}
                                    className={`item`}
                                >
                                    <img 
                                        src={images[item.name + ".svg"]} 
                                        alt={item.name} 
                                        data-mssg={i}
                                        onClick={onClick}
                                        className={item.selected ? "scale" : null}
                                    />
                                </animated.div>
                            )
                        })
                    }
                </Container>
                <div style={{position: "absolute", bottom: "2%", fontSize: "7rem", width: "100%", textAlign: "center"}}>
                    <h3>{number}</h3>
                </div>
            </div>
        )
    }
    
    
}

export default Bag;