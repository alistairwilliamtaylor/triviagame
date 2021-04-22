import './App.css';
import QuestionDisplay from './QuestionDisplay.js'
import ScoreDisplay from './ScoreDisplay.js'
import GetQuestions from './GetQuestions.js'

function App() {
  return (
    <div className="App">
      <GetQuestions />
      <QuestionDisplay />
      <ScoreDisplay />
    </div>
  );
}

export default App;
