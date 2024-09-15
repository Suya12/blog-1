
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Content from './components/contents/Content';
import Header from './components/headers/Header';
import Category from './components/contents/Category';
import NotFound from './components/pages/NotFound';
import Posting from './components/contents/Posting';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Content />}></Route>
          {/* <Route path="/category" element={<Category/>}></Route> */}

          <Route path="/category/:postingId" element={<Posting />}></Route>

          <Route path="*" element={<NotFound />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
