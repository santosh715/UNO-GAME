// src/App.js
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from "./components/Home"
import HostRoom from './components/HostRoom';
import './App.css';
import Host from './components/Host';
import RoomCode from './components/RoomCode';
import Players from './components/Players';
import Dashboard from './components/Dashboard';
import { GameProvider } from './context/GameContext';
import Try from './components/Try';
import PlayingDashboard from './components/PlayingDashboard';



function Main() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/HostRoom" element={<HostRoom />} />
                <Route path="/Host" element={<Host />} />
                <Route path="/RoomCode" element={<RoomCode />} />
                <Route path="/Players" element={<Players />} />
                <Route path='/Dashboard' element={<Dashboard />} />
                <Route path='/PlayingDashboard' element={<PlayingDashboard />} />
                <Route path='/Try' element={<Try />} />
                
            </Routes>
        </div>
    );
}

function App() {
    return (
        <div className='body-main'>
            <Router>
                <GameProvider>
                    <Main />
                </GameProvider>
            </Router>
        </div>
        
    )
}

export default App;
