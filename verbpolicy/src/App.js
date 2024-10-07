import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import PrivacyPolicy from './components/PrivacyPolicy';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='App'>
      <Routes>
        {/* This sets the PrivacyPolicy component as the default home page */}
        <Route path="/" element={<PrivacyPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
