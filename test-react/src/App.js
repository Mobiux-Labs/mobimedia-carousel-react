import logo from './logo.svg';
import './App.css';
import Carousel from './Carousel';

function App() {
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
          Learn React
        </a>
      </header>
      <div>
        <Carousel playlistId="0671b779-d33a-7098-8000-66572f67cfc1" />
      </div>
      hello
    </div>
  );
}

export default App;
