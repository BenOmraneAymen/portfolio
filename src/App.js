import { useEffect } from "react";
import MainPage from "./pages/MainPage";
import Blog from "./pages/Blog";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstBlog from "./pages/FirstBlog";
import SecondBlog from "./pages/SecondBlog";
import ThirdBlog from "./pages/ThirdBlog";



function App() {


  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/blog">
            <Route path="" element={<Blog />}/>
            <Route path="1" element={<FirstBlog/>} />
            <Route path="2" element={<SecondBlog/>} />
            <Route path="3" element={<ThirdBlog/>} />
          </Route>
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
