import './App.scss';
import Home from '../Components/Home/Home';
import Home2 from '../Components/Home2/Home2';
import { useState } from 'react';

const App = () => {
  const [route, setRoute] = useState('signin');

  const OnRouteChange = () => {
    setRoute('register');
  };

  return (
    <div className="App">
      {route === 'signin' ? (
        <Home OnRouteChange={OnRouteChange} />
      ) : (
        <Home2 OnRouteChange={OnRouteChange} />
      )}
    </div>
  );
};

export default App;
