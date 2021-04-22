import './App.css';
import QuestionDisplay from './QuestionDisplay.js'
import ScoreDisplay from './ScoreDisplay.js'
import InitializeGame from './InitializeGame.js'

function App() {
  return (
    <div className="App">
      <InitializeGame />
      <QuestionDisplay />
      <ScoreDisplay />
    </div>
  );
}

export default App;
