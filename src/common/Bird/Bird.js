import React from 'react';
import './Bird.scss';

function Bird() {
    return (
        <div className="globe">
            <div className="bird">
                <div className="body">
                    <div className="eye left"></div>
                    <div className="eye right"></div>
                    <div className="beak"><div></div></div>
                    <div className="feet"></div>
                    <div className="wire"></div>
                </div>
                <div className="hills"></div>
                <div className="cloud"></div>
                <div className="cloud small"></div>
            </div>
        </div>

    )
}

export default Bird;