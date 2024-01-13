import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import BlogPage from './pages/BlogPage/BlogPage';
import WorksPage from './pages/WorksPage/WorksPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/blog' element={<BlogPage/>}/>
          <Route path='/works' element={<WorksPage/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
