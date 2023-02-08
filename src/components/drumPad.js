import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { setDisplayText } from '../redux/action';

export default function DrumPad(props) {
    const {
       pad
    } = props;

    const bank = useSelector(state => state.bank);
    const power = useSelector(state => state.power);
    const volume  = useSelector(state => state.volume);
    
    const dispatch = useDispatch();

    const handleKeyPress = (e) => {
        if (e.key.toLowerCase() === pad['song-id']) {
            const audio = document.getElementById(e.key.toLowerCase());
            audio.play();
            audio.parentElement.className = "drum-pad drum-pad-active";
            dispatch(setDisplayText(audio.parentElement.id));
        }
    }
    const handleKeyDown = (e) => {
        if (e.key.toLowerCase() === pad['song-id']) {
            document.getElementById(e.key.toLowerCase()).parentElement.className = "drum-pad drum-pad-active";
        }
    }
    const handleKeyUp = (e) => {
        if (e.key.toLowerCase() === pad['song-id']) {
            document.getElementById(e.key.toLowerCase()).parentElement.className = "drum-pad";
        }
    }

    useEffect(() => {
        window.addEventListener('keypress', handleKeyPress);
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
    }, [])
    
    useEffect(() => {
        const audios = document.querySelectorAll('audio')
        audios.forEach(audio => {
            audio.volume = volume/ 100;
        })
    }, [ volume ]);

    const handleClick = (e) => {
        e.target.firstElementChild.play();
        dispatch(setDisplayText(e.target.id));
    }
    const handleMouseDown = (e) => {
        e.target.className = "drum-pad drum-pad-active";
    }
    const handleMouseUp = (e) => {
        e.target.className = "drum-pad";
    }

  return (
    <div id={bank ? pad.heater.id : pad.smoothPiano.id}
        className='drum-pad'
        onClick={(e) => handleClick(e)}
        onMouseDown={(e) => handleMouseDown(e)}
        onMouseUp={(e) => handleMouseUp(e)}
    >
        {pad.innerText}
        <audio 
            className='audio'
            id={pad['song-id']}
            src={ 
            power ? 
                bank ? pad.heater.src 
                : pad.smoothPiano.src
            : '#'}
            />
    </div>
  )
}
