import './App.css';
import CityNews from './pages/CityNews';
import UniversityNews from './pages/UniversityNews'
import AcPage from './pages/AcPage'
import SportsPage from './pages/SportsPage';
import SpectrumPage from './pages/SpectrumPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
  <div>
        <Routes>
          <Route path="/" element={<UniversityNews />} />
          <Route path="city" element={<CityNews />} />
          <Route path="/ac" element={<AcPage />} />
          <Route path="/sports" element={<SportsPage />} />
          <Route path="spectrum" element={<SpectrumPage />} />
        </Routes>
    </div>
    
  );
}
export default App;