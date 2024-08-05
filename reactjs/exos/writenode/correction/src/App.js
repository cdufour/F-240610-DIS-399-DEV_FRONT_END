import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { AllRoutes } from './routes/AllRoutes';
import { useState } from 'react';

function App() {

  const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem('isAuth')) || false);

  return (
    <div className="App">
      <Header isAuth={isAuth} setIsAuth={setIsAuth} />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
