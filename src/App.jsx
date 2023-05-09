import './App.css';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Songwriting from './routes/songwriting/songwriting.component';
import MusicProduction from './routes/musicproduction/musicproduction.component';
import Inspirations from './routes/inspirations/inspirations.component';
import Hardware from './routes/hardware/hardware.component';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={<Navigation />}>
          <Route
            index
            element={<Home />}
          />
          <Route
            path='songwriting'
            element={<Songwriting />}
          />
          <Route
            path='musicproduction'
            element={<MusicProduction />}
          />
          <Route
            path='inspirations'
            element={<Inspirations />}
          />
          <Route
            path='hardware'
            element={<Hardware />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
