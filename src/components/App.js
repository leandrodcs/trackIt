import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../reset.css';
import Login from './Login';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path ="/" render={() => <Login />}/>
        <Route exact path ="/cadastro" render={() => <></>}/>
        <Route exact path ="/habitos" render={() => <></>}/>
        <Route exact path ="/hoje" render={() => <></>}/>
        <Route exact path ="/historico" render={() => <></>}/>
      </Switch>
    </BrowserRouter>
  )
}
