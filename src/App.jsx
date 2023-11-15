import logo from './logo.svg';
import './App.css';
import Question from './components/Question';

// Rotating Test Component for use during Tutorial Folder
/* Since we are using a name that is not a function in the component file, the default export function is set to this variable
AKA, the ErrorExample function is assigned to the variable since a specific function name is not used */
import TestComponent from './tutorial/01-useState/1-error-example';
import TestComponentFix from './tutorial/01-useState/1-error-example-fix';
import Button from './components/Button.jsx';
import Names from './tutorial/01-useState/2-useState-basics';
import Change from './tutorial/01-useState/3-useState-object';
import Counter from './tutorial/01-useState/4-useState-counter';
import PropDrilling from './tutorial/02-prop-drilling/1-prop-drilling';

function App() {
  let firstName = 'Click Here for more information';
  let title = 'How are you doing this?';
  let info = 'Magic-TXT';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {firstName}
        </a>
        <Question title={title} info={info}/>
        <TestComponentFix/>
        <Button></Button>
        {/* <Names></Names> */}
        {/* <Change></Change> */}
        <Counter></Counter>
        <PropDrilling></PropDrilling>
      </header>
    </div>
  );
}

export default App;
