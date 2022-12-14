import { 
  BrowserRouter as Router, 
  Routes, 
  Route,
} from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/login';
import { Feed } from './pages/Feed';
//import { Teste } from './pages/index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/feed' element={<Feed />}/>
        {/* <Route path='/teste' element={<Teste />}/> */}
      </Routes>
    </Router>
  );
}

export default App;
