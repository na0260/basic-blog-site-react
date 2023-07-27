import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import ByCategory from "./Pages/ByCategory.jsx";
import BlogDetails from "./Components/BlogDetails.jsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/category-wise-blog/:CatId" element={<ByCategory/>}></Route>
                <Route path="/blog-details/:BLogID" element={<BlogDetails/>}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
