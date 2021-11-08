import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import People from './components/People';
import Planets from './components/Planets';

function App() {
  return (
    <BrowserRouter>
        <Home/>
        <Switch>
          <Route exact path="/people/:id">
            <People />
          </Route>
          <Route exact path="/planets/:id">
            <Planets />
          </Route>
        </Switch>
    </BrowserRouter>
  );
}
    

export default App;
