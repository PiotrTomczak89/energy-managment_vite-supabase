import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
//import viteLogo from "/vite.svg"; //IMPORTOWANIE ZDJĘĆ JAK W TYM PRZYPADKU
import Main from "./sites/Main"
import SignIn from "./sites/SignIn"
import SignUp from "./sites/SignUp"
import Loading from "./sites/Loading"

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </Router>
  );
}

export default App;
