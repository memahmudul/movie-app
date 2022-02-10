
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Watchlist from './components/Watchlist';
import Watched from './components/Watched';
import Add from './components/Add';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
        <Route path="/"  exact element={<Watchlist/>} />
        <Route path="/watched"  exact element={<Watched/>} />
        <Route path="/add"  exact element={<Add/>} />
        

        </Routes>
      </Router>
    </>
  );
}

export default App;
