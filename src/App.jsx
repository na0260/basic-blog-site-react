import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import ByCategory from "./Pages/ByCategory.jsx";
import BlogDetailsPage from "./Pages/BlogDetailsPage.jsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/category-wise-blog/:catId" element={<ByCategory/>}></Route>
                <Route path="/blog-details/:blogID" element={<BlogDetailsPage/>}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
