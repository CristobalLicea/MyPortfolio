import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  //Navigate,
  //useNavigate
} from 'react-router-dom';
import { Homepage, Navbar } from './components';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<Layout />}>
          <Route index element={<Homepage/> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
