import logo from './logo.svg';
import './App.css';
import Question from './components/Question';
import Button from './components/Button.jsx';

function App() {
  let firstName = 'Click Here for more information';
  let title = 'How are you doing this?';
  let info = 'Magic-TXT';
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
         Student Information Application
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {firstName}
        </a> */}
        <Question title={title} info={info}/>
        <Button></Button>
      </header>
    </div>
  );
}

export default App;