import logo from './logo.svg';
import './App.css';
import Body from "./Components/Body";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <p className="containerName">YOUR BAG</p>
      <Body />
    </div>
  );
}

export default App;
