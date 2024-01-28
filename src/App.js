import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

//Page Imports
import Layout from './components/Layout';
import Home from './pages/Home';
import USA from './pages/USAPage';
import France from './pages/France';
import Other from './pages/Other';
import NoPage from './pages/NoPage';


//, Contact, Home, NoPage


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="usa" element={<USA />} />
          <Route path="france" element={<France />} />
          <Route path="other" element={<Other />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
