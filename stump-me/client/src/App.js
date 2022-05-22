import logo from './stumpMe.png';
import Riddle from './Pages/Riddle';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Stump Me</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Riddle />
    </div>
  );
}

export default App;
