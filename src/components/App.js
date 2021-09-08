import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../reset.css';
import Login from './Login';
import Register from './Register';
import Today from './Today';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path ="/" render={() => <Login />}/>
        <Route exact path ="/cadastro" render={() => <Register />}/>
        <Route exact path ="/habitos" render={() => <></>}/>
        <Route exact path ="/hoje" render={() => <Today />}/>
        <Route exact path ="/historico" render={() => <></>}/>
      </Switch>
    </BrowserRouter>
  )
}
