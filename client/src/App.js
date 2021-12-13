import './app.scss'
import Home from './pages/home/Home'
import LeftSideBar from "./components/leftSidebar/LeftSideBar"
import RightSidebar from "./components/RightSideBar/RightSidebar"
function App() {
  return (
    <div className="app">
      <LeftSideBar/>
      <Home/>
      <RightSidebar/>
    </div>
  );
}

export default App;
