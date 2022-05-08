import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DrumKit from './pages/DrumKit/DrumKit';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='drumkit' element={<DrumKit/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
