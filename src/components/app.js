import { BrowserRouter, Route, Routes } from "react-router-dom";
import Education from "./pages/Education/Education";
import Intro from "./pages/Intro/Intro";

export default function App () {
return (
        <BrowserRouter>
            <Routes>
                <Route path="/intro" element={<Intro/>}></Route>
                <Route path="/education" element={<Education/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}
