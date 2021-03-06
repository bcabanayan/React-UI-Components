import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton.js'
import ActionButton from './components/ButtonComponents/ActionButton.js'
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js'

const App = () => {
  return (
    <div className='container'>
      <CalculatorDisplay buttonStyle={'all display'} text={'0'} />
      <div className='row'>
        <ActionButton buttonStyle={'all action'} text={'clear'} />
        <NumberButton buttonStyle={'all operator'} text={String.fromCharCode(247)} />
      </div>
      <div className='row'>
        <NumberButton buttonStyle={'all number'} text={'7'} />
        <NumberButton buttonStyle={'all number'} text={'8'} />
        <NumberButton buttonStyle={'all number'} text={'9'} />
        <NumberButton buttonStyle={'all operator'} text={String.fromCharCode(215)} />
      </div >
      <div className='row'>
        <NumberButton buttonStyle={'all number'} text={'4'} />
        <NumberButton buttonStyle={'all number'} text={'5'} />
        <NumberButton buttonStyle={'all number'} text={'6'} />
        <NumberButton buttonStyle={'all operator'} text={'-'} />
      </div>
      <div className='row'>
        <NumberButton buttonStyle={'all number'} text={'1'} />
        <NumberButton buttonStyle={'all number'} text={'2'} />
        <NumberButton buttonStyle={'all number'} text={'3'} />
        <NumberButton buttonStyle={'all operator'} text={'+'} />
      </div>
      <div className='row'>
        <ActionButton buttonStyle={'all action'} text={'0'} />
        <NumberButton buttonStyle={'all operator'} text={'='} />
      </div>
    </div>
  );
};

export default App;
