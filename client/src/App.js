import './app.scss'
import Home from './pages/home/Home'
import LeftSideBar from "./components/leftSidebar/LeftSideBar"
import RightSidebar from "./components/RightSideBar/RightSidebar"
import Profile from "./pages/profile/Profile"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import { useContext } from 'react'
import { UserContext } from './userContext/userContext'
import SimpleRegister from './pages/simpleRegister/SimpleRegister'
function App() {
  const { user } = useContext(UserContext)
  return (
    <Router>
      <div className="app">
        {user && <LeftSideBar/>}
        <Routes>
          <Route path="/" element={user ? <Home/>: <Navigate to="/register"/>}/>
          <Route path="/profile" element={user ? <Profile/> : <Navigate to="/login"/>}/>
          <Route path="/login" element={user ? <Navigate to="/"/>: <Login/>}/>
          <Route path="/register" element={user ? <Navigate to="/"/>: <Register/>}/>
          <Route path="/userpassregister" element={user ? <Navigate to="/"/>: <SimpleRegister/>}/>
        </Routes>
        {user && <RightSidebar/>}
      </div>
    </Router>
  );
}

export default App;
