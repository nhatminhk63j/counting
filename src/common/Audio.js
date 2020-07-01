import React from 'react';

import soundSfx from './sound/background-sound.mp3';

function Audio(){
    return (
        <audio src={soundSfx} autoPlay={true} volume={0.01} loop={true} />
        //thuoc tinh volume ko hoat dong trong khi tren cac document van co
        // Tao mot input volume hay toggle de bat tat
    )
}

export default Audio;