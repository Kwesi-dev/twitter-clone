import './app.scss'
import Home from './pages/home/Home'
import LeftSideBar from "./components/leftSidebar/LeftSideBar"
import RightSidebar from "./components/RightSideBar/RightSidebar"
import Profile from "./pages/profile/Profile"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/login/Login'
function App() {
  const user = false
  return (
    <Router>
      <div className="app">
        {user && <LeftSideBar/>}
        <Routes>
          <Route path="/" element={user ? <Home/>: <Navigate to="/login"/>}/>
          <Route path="/profile" element={user ? <Profile/> : <Navigate to="/login"/>}/>
          <Route path="/login" element={user ? <Navigate to="/"/>: <Login/>}/>
        </Routes>
        {user && <RightSidebar/>}
      </div>
    </Router>
  );
}

export default App;
