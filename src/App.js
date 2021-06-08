import './App.css';
import React from "react";

function App() {
  const [textInput, setTextInput] = React.useState('Here is some example text.');
  const [textOutput, setTextOutput] = React.useState('');
  const [activeMode, setActiveMode] = React.useState('upper')

  const handleChange = event => {
    setTextInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    activeMode === 'upper' ?
      setTextOutput(textInput.toUpperCase()) 
      : setTextOutput(textInput.toLowerCase());
  };

  const handleOutputClick = event => {
    setActiveMode(event.target.value)
  };


  return (
    <div className="App">
      <header>
        <h1>Career Lab | Take-Home Assignment</h1>
      </header>
      <div className="mode-buttons">
        <button className={activeMode === 'upper' ? 'active' : 'inactive'} value="upper" onClick={handleOutputClick}>Upper</button>
        <button className={activeMode === 'upper' ? 'inactive' : 'active'} value="lower" onClick={handleOutputClick} >Lower</button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          <textarea onChange={handleChange} value={textInput}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
      <div id="result">
        {textOutput}
      </div>
    </div>
  );
}

export default App;
