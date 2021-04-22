import './App.css';
import { Switch, Route } from 'react-router-dom'
import QuestionDisplay from './QuestionDisplay.js'
import ScoreDisplay from './ScoreDisplay.js'
import InitializeGame from './InitializeGame.js'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/gameplay'>
          <QuestionDisplay />
          <ScoreDisplay />
        </Route>
        <Route path='/result'>
          <ScoreDisplay />
        </Route>
        <Route path='/'>
          <InitializeGame />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
