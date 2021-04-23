import './App.css';
import { Switch, Route } from 'react-router-dom'
import QuestionDisplay from './QuestionDisplay.js'
import InitializeGame from './InitializeGame.js'
import ResultDisplay from './ResultDisplay.js'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/gameplay'>
          <QuestionDisplay />
        </Route>
        <Route path='/result'>
          <ResultDisplay />
        </Route>
        <Route path='/'>
          <InitializeGame />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
