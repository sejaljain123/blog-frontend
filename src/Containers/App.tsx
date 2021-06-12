import './App.scss';
import Signin from '../Components/Signin/Signin';
import Register from '../Components/Register/Register';
import { Route, Switch } from 'react-router-dom';
import DashboardPage from '../Components/DashboardPage/DashboardPage';
import BlogDetail from '../Components/BlogDetail/BlogDetail';
import Hero from '../Components/Hero/Hero';

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Hero} />
        <Route exact path="/signin" component={Signin}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route path="/dashboard" component={DashboardPage}></Route>
        <Route exact path="/:id" component={BlogDetail}></Route>
      </Switch>
    </div>
  );
};

export default App;
