import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Navigation from './components/navigation';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className='AppWrapper'>
    
      <Router>
        <Navigation />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/:type/:id' element={<PetDetailsPage />}/>
          <Route path='/:type' element={<HomePage />} />
          <Route path='/search' element={<SearchPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
