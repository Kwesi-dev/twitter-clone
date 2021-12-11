import './app.scss'
import Home from './pages/home/Home'
import LeftSideBar from "./components/leftSidebar/LeftSideBar"
import RightSidebar from "./components/RightSideBar/RightSidebar"
function App() {
  return (
    <div className="app">
      <div className="left">
        <LeftSideBar/>
      </div>
      <div className="center">
        adsas
      </div>
      <div className="right">
        <RightSidebar/>
      </div>
    </div>
  );
}

export default App;
