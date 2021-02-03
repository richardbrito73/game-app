
import './App.css';
import Player from './components/Player';
import Dealer from './components/Dealer';
import ThemeContextProvider from './contexts/ThemeProvider';


function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <h1>Card Game</h1>
      </header>
      <ThemeContextProvider>
        <Player />
        <Dealer />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
