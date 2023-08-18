import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Layout from './components/globals/Layout';
import Home from './components/pages/Home';
import NotFound from './components/globals/NotFound';
import Test from './components/pages/Test';
import Events from './components/pages/Events';
import { useState } from 'react';
import Audition from './components/pages/Audition';
import Shows from './components/pages/Shows';


function App() {

  return (
    <div className="App">
        <Routes>
          <Route index exact={true} element={<Home />} />
          <Route path="/" element={<Layout />} >
            <Route path="events" element={<Events />} />
            <Route path="audition" element={<Audition />} />
            <Route path="shows" element={<Shows />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
