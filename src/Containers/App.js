import './App.scss';
import Signin from '../Components/Signin/Signin';
import Register from '../Components/Register/Register';
import { useState } from 'react';
import Dashboard from '../Components/Dashboard/Dashboard';

const App = () => {
  const [route, setRoute] = useState('signin');
  const OnRouteChange = (route) => {
    if (route === 'signout') {
      setRoute('signin');
    } else if (route === 'home') {
      setRoute('home');
    } else {
      setRoute(route);
    }
  };

  return (
    <div className="App">
      {route === 'home' && <Dashboard OnRouteChange={OnRouteChange} />}
      {route === 'signin' && <Signin OnRouteChange={OnRouteChange} />}
      {route === 'register' && <Register OnRouteChange={OnRouteChange} />}
    </div>
  );
};

export default App;
