import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../reset.css';
import Login from './Login';
import Register from './Register';
import Today from './Today';

export default function App() {

  const [user, setUser] = useState(null);

  console.log(user);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path ="/" render={() => <Login setUser={setUser} />}/>
        <Route exact path ="/cadastro" render={() => <Register />}/>
        <Route exact path ="/habitos" render={() => <></>}/>
        <Route exact path ="/hoje" render={() => <Today />}/>
        <Route exact path ="/historico" render={() => <></>}/>
      </Switch>
    </BrowserRouter>
  )
}
