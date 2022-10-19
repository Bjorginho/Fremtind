import './App.css';
import HomePage from './pages/HomePage';
import { userExample } from './data';
import { UserContext } from './context/UserContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <UserContext.Provider value={userExample}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/oversikt" element={<></>} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
