import './App.scss';
import Signin from '../Components/Signin/Signin';
import Register from '../Components/Register/Register';
import { useState } from 'react';
import Dashboard from '../Components/Dashboard/Dashboard';
import CreateBlog from '../Components/CreateBlog/CreateBlog';
import Footer from '../Components/Footer/Footer';
const App = () => {
  const [route, setRoute] = useState('signin');
  const OnRouteChange = (route) => {
    if (route === 'signout') {
      setRoute('signin');
    } else {
      setRoute(route);
    }
    console.log(route);
  };

  return (
    <div className="App">
      {route === 'home' && <Dashboard OnRouteChange={OnRouteChange} />}
      {route === 'signin' && <Signin OnRouteChange={OnRouteChange} />}
      {route === 'register' && <Register OnRouteChange={OnRouteChange} />}
      {route === 'create' && <CreateBlog OnRouteChange={OnRouteChange} />}
      {route === 'home' && <Footer />}
    </div>
  );
};

export default App;
