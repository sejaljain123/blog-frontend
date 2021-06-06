import './App.scss';
import Signin from '../Components/Signin/Signin';
import Register from '../Components/Register/Register';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import DashboardPage from '../Components/DashboardPage/DashboardPage';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Signin}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route path="/dashboard" component={DashboardPage}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
