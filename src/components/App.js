import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import '../reset.css';
import Habits from './Habits/Habits';
import Login from './Login';
import Register from './Register';
import Today from './Today/Today';
import History from './History';


export default function App() {

  const [user, setUser] = useState(null);

  console.log(user);

  return (
    <UserContext.Provider value={user}>
      <BrowserRouter>
        <Switch>
          <Route exact path ="/" render={() => <Login setUser={setUser} />}/>
          <Route exact path ="/cadastro" render={() => <Register />}/>
          <Route exact path ="/habitos" render={() => <Habits />}/>
          <Route exact path ="/hoje" render={() => <Today />}/>
          <Route exact path ="/historico" render={() => <History />}/>
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  )
}
