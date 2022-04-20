import './App.css';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import Post from './components/Post';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Notfound from './components/Notfound';
import { useState } from 'react';

function App() {
  const [login, setLogin] = useState(false);
  return (
    <div>
      {/* you can use forcerefresh also
       */}
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <button onClick={() => setLogin(!login)}>
            {login ? 'logout' : 'login'}
          </button>
        </div>
        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/profile" element={<Profile log={login} />}></Route>
          <Route path="/post/:id" element={<Post />}></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
