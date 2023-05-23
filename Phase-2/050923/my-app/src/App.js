import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './home';
import About from './about';
import Contact from './contact';
import NotFound from './NotFound';
import HeaderNav from './HeaderNav';




function App() { 

  const props = {
    'name': "Jane",
    'hobby': "Legos",
    'sayHello': () =>{
      window.alert("Hello!");
    }
  }

  return (
      <BrowserRouter>
        <HeaderNav />
        <Routes>
          <Route index element={<Home name={props.name} hobby={props.hobby} sayHello={props.sayHello} />} />
          <Route path="about" element={<About name={props.name} hobby={props.hobby} sayHello={props.sayHello} />} />
          <Route path="contact" element={<Contact sayHello={props.sayHello} />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
