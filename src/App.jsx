import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";
import { SplitHome } from "./components/splitHome/SplitHome";

function App() {
  return (
    <div>
      <Routes>
        {/* <Route path='/' element={<HomePage/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup/:' element={<SignUp/>}></Route> */}
        
      </Routes>
      <SplitHome />
    </div>
  );
}

export default App;
