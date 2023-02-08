import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { setBank, setPower, setVolume } from './redux/action';
import DrumPad from './components/drumPad';
import pads from '../src/pads.json';
import './App.css';

function App() {
  const dispatch = useDispatch();

  const bank = useSelector(state => state.bank);
  const power = useSelector(state => state.power);
  const displayText = useSelector(state => state.displayText);
  const volume  = useSelector(state => state.volume);

    

  return (
    <div className="App">
      <div id='drum-machine'>
        <div id='drum-pads'>
          {
            pads.map(pad => {
              return(
                <DrumPad pad={pad} key={pad['song-id']}/>
              )
            })
          }
        </div>
        <div id='controls'>
          <div id='display'>
            <p>
              {power ? displayText : ''}
            </p>
          </div>
          <div className='volume-div'>
            <p>volume: </p>
            <div className='slider-div'>
              <input type='range'
                onChange={(e) => dispatch(setVolume(e.target.value))}
                min={0} 
                max={100} 
                className='slider'
                id='volume-range' 
                value={volume}/>
            </div>
          </div>
          <div className='toggles'>
            <div className='toggle-div'>
              <p>Bank: </p>
              <div className='checkbox-div'>
                <label
                  className='checkbox-label'
                  htmlFor='bank-checkbox'
                >
                  <input type='checkbox' 
                    id='bank-checkbox'
                    className='checkbox-input'
                    onChange={(e) => dispatch(setBank(e.target.checked))}
                    checked={bank}
                    disabled={power ? false : true}
                  />
                  <span className='checkbox-button'/>
                </label>
              </div>
            </div>
            <div className='toggle-div'>
              <p>Power: </p>
              <div className='checkbox-div'>
                <label
                  className='checkbox-label'
                  htmlFor='power-checkbox'
                >
                  <input type='checkbox' 
                    id='power-checkbox'
                    className='checkbox-input'
                    onChange={(e) => dispatch(setPower(e.target.checked))}
                    checked={power}
                  />
                  <span className='checkbox-button'/>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
