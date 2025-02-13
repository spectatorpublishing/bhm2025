import './App.css';
import styled from 'styled-components';

import CityNews from './pages/CityNews';
import UniversityNews from './pages/UniversityNews'
import OpinionPage from './pages/OpinionPage'
import AcPage from './pages/AcPage'
import SportsPage from './pages/SportsPage';
import SpectrumPage from './pages/SpectrumPage';
import PodcastPage from './pages/PodcastPage';


import { BrowserRouter, Routes, Route } from 'react-router-dom';



const PageWrapper = styled.div`
  background-color: #1F2925; 
  width: 100%;
  min-height: 100vh;
`;

function App() {
  return (
    
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<UniversityNews />} />
        <Route path="city" element={<CityNews />} />
        <Route path="/opinion" element={<OpinionPage />} />
        <Route path="/ac" element={<AcPage />} />
        <Route path="/sports" element={<SportsPage />} />
        <Route path="spectrum" element={<SpectrumPage />} />
        <Route path="/podcast" element={<PodcastPage />} />c
      </Routes>
    </BrowserRouter>
    

  );
}
export default App;