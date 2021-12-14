import './app.scss'
import Home from './pages/home/Home'
import LeftSideBar from "./components/leftSidebar/LeftSideBar"
import RightSidebar from "./components/RightSideBar/RightSidebar"
import Profile from "./pages/profile/Profile"
function App() {
  return (
    <div className="app">
      <LeftSideBar/>
      {/* <Home/> */}
      <Profile/>
      <RightSidebar/>
    </div>
  );
}

export default App;
