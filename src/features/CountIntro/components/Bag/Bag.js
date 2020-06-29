import React, { useState, useEffect } from 'react';
import { useImagesContext } from "../../../../contexts/ImagesContext";
import { Container } from "./styles";
import { animated } from "react-spring";
import { Redirect } from 'react-router-dom';

var intervalID;
var next = false;

function Bag(props){
    const { images } = useImagesContext();
    const [ listItems, setListItems ] = useState([...props.items])
    const [ idx, setIdx ] = useState(0);
    const [ timeDelay, setTimeDelay ] = useState(200);
    
    useEffect(() => {
        intervalID = setInterval(() => {
            setIdx(preIdx => preIdx + 1);
        }, timeDelay)
    }, [timeDelay])

    useEffect(() => {
        const newListItems = [...listItems];
        
        if (idx <= 19) {
            newListItems[idx] = {
                ...listItems[idx],  
                flipped: !listItems[idx].flipped
            };
        } else if (idx <= 39) {
            
            newListItems[idx - 20] = {
                ...listItems[idx - 20],  
                flipped: !listItems[idx - 20].flipped,
                displayNumber: true
            };
        }
        setListItems(newListItems);
        
    }, [idx])


    useEffect(() => {
        if (idx > 19 ) {
            setTimeDelay(1000);
            clearInterval(intervalID);
            intervalID = setInterval(() => {
                setIdx(preIdx => preIdx + 1);
            }, 1000)
        }
        if (idx >= 38) {
            setTimeout(() => {
                next = true;
            }, 2000)
            return () => clearInterval(intervalID);
        }
    }, [idx])
    
    return (
        <Container>
            {
                !next ? listItems.map((item, i) => {
                    return (
                        <animated.div key={`p${i}`}
                            className={`item ${item.flipped ? "gray" : null} ${item.displayNumber && i === 19 ? "shake-scale" : null}`}
                        >
                            <h4>{item.displayNumber ? i + 1 : ''}</h4>
                            <img src={images[item.name + ".svg"]} alt={item.name} />
                        </animated.div>
                    )
                }) : (
                    <Redirect to="count-select" />
                )
            }
        </Container>
    )
}
export default Bag;