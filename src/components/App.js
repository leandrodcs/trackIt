import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import ProgressContext from '../contexts/ProgressContext';
import '../reset.css';
import Habits from './Habits/Habits';
import Login from './Login';
import Register from './Register';
import Today from './Today/Today';
import History from './History';


export default function App() {

  const [user, setUser] = useState(null);
  const [progress, setProgress] = useState(0);

  return (
    <UserContext.Provider value={user}>
      <BrowserRouter>
        <Switch>
          <Route exact path ="/" render={() => <Login setUser={setUser} />}/>
          <Route exact path ="/cadastro" render={() => <Register />}/>
          <ProgressContext.Provider value={progress}>
            <Route exact path ="/habitos" render={() => <Habits />}/>
            <Route exact path ="/hoje" render={() => <Today setProgress={setProgress}/>}/>
            <Route exact path ="/historico" render={() => <History />}/>
          </ProgressContext.Provider>
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  )
}
