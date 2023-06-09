import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Main from "./sites/Main"
import SignIn from "./sites/SignIn"
import SignUp from "./sites/SignUp"
import Loading from "./sites/Loading"

function App() {

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
