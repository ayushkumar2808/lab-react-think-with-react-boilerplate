import logo from './Kalvi-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Hello Kalvians
        </h1>
        <a
          className="App-link"
          href="https://kalvium.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit our website
        </a>
      </header>
    </div>
  );
}

export default App;
