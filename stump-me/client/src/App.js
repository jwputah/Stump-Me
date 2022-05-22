import logo from './stumpMe.png';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <header className="App-header">
        <h1>Welcome to Stump Me</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
