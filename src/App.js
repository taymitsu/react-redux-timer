import './App.css';
import NewTimer from './components/NewTimer';
import ListTimers from './components/ListTimers';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        Hourglass 
        <NewTimer />
        <ListTimers />
      </div>
    </div>
  );
}

export default App;
