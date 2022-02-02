import "./App.css";

import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Blog from "./Component/Blog/Blog";
import About from "./Component/About/About";
import Footer from "./Component/Footer/Footer";
import SingleBlog from "./Component/SingleBlog/SingleBlog";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/blog/:id" element={<SingleBlog />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
