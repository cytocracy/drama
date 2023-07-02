import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Layout from './components/globals/Layout';
import Home from './components/pages/Home';
import NotFound from './components/globals/NotFound';
import Test from './components/pages/Test';


function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/drama'>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="test" element={<Test />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
