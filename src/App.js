import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './components/pages/Home.jsx';
import Header from './components/layouts/Header.jsx';
import Intro from './components/pages/Intro.jsx';
import Hooks from './components/pages/Hooks.jsx';
import Js from './components/pages/Js.jsx';
import PageNotFound from './components/pages/PageNotFound.jsx';

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/intro' element={<Intro />}/>
          <Route path='/hooks' element={<Hooks />}/>
          <Route path='/js' element={<Js />}/>
          <Route path='*' element={<PageNotFound />}/>
        </Routes>
    </Router>
  )
};

export default App;
