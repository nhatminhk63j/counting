import sound1 from './sound/1.mp3';
import sound2 from './sound/2.mp3';
import sound3 from './sound/3.mp3';
import sound4 from './sound/4.mp3';
import sound5 from './sound/5.mp3';
import sound6 from './sound/6.mp3';
import sound7 from './sound/7.mp3';
import sound8 from './sound/8.mp3';
import sound9 from './sound/9.mp3';
import sound10 from './sound/10.mp3';
import sound11 from './sound/11.mp3';
import sound12 from './sound/12.mp3';
import sound13 from './sound/13.mp3';
import sound14 from './sound/14.mp3';
import sound15 from './sound/15.mp3';
import sound16 from './sound/16.mp3';
import sound17 from './sound/17.mp3';
import sound18 from './sound/18.mp3';
import sound19 from './sound/19.mp3';
import sound20 from './sound/20.mp3';

export default function(number) {
    switch(number){
        case 1: 
            return sound1;
        case 2:
            return sound2;
        case 3:
            return sound3;
        case 4:
            return sound4;
        case 5:
            return sound5;
        case 6:
            return sound6;
        case 7:
            return sound7;
        case 8:
            return sound8;
        case 9:
            return sound9;
        case 10:
            return sound10;
        case 11:
            return sound11;
        case 12:
            return sound12;
        case 13:
            return sound13;
        case 14:
            return sound14;
        case 15:
            return sound15;
        case 16:
            return sound16;
        case 17:
            return sound17;
        case 18:
            return sound18;
        case 19:
            return sound19;
        case 20: 
            return sound20;
        default:
            return null;
    }
}