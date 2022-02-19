import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './components/pages/Home.jsx'
import Header from './components/layouts/Header.jsx';
import Intro from './components/pages/Intro.jsx';

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/intro' element={<Intro/>}/>
        </Routes>
    </Router>
  )
};

export default App;
