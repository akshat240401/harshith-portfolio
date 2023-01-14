import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/Home'
import About from './components/About';
import Certificate from './components/Certificate';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About />} />
        <Route path="/certificate" element={<Certificate />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
