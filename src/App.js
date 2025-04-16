
import './App.css';
import Header from './components/Header';
import BlogInfo from './components/pages/BlogInfo';
import Blog1 from './components/pages/Blog1';
import Blog2 from './components/pages/Blog2';
import Blog3 from './components/pages/Blog3';
import Blog4 from './components/pages/Blog4';
import Blog5 from './components/pages/Blog5';
import { Route, Routes } from 'react-router';
import DefaultLeyout from './components/leyouts/DefaultLeyout';


function App() {

  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<DefaultLeyout />}>
          <Route index element={<BlogInfo />} />
          <Route path='/blog1' element={<Blog1 />} />
          <Route path='/blog2' element={<Blog2 />} />
          <Route path='/blog3' element={<Blog3 />} />
          <Route path='/blog4' element={<Blog4 />} />
          <Route path='/blog5' element={<Blog5 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
