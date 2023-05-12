import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './home';
import About from './about';
import Contact from './contact';
import NotFound from './NotFound';
import HeaderNav from './HeaderNav';

function App() {

  return (
      <BrowserRouter>
        <HeaderNav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
