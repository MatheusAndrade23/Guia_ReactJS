import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './components/pages/Home.jsx'
import Header from './components/layouts/Header.jsx';

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route exact path='/' element={<Home/>}/>
        </Routes>
    </Router>
  )
};

export default App;
