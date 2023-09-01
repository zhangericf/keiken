import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/body/Home';
import Destination from './components/body/Destination';
import Crew from './components/body/Crew';
import Technology from './components/body/Technology';
import Header from './components/header/Header';

function App() {
    return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/destination/moon" element={<Destination />} />
        <Route path="/destination/mars" element={<Destination />} />
        <Route path="/destination/europa" element={<Destination />} />
        <Route path="/destination/titan" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/crew/douglas-hurley" element={<Crew />} />
        <Route path="/crew/mark-shuttleworth" element={<Crew />} />
        <Route path="/crew/victor-glover" element={<Crew />} />
        <Route path="/crew/anousheh-ansari" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </>
  );
}

export default App;
