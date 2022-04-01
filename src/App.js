import { Route, Routes } from 'react-router-dom';
import './App.css';
import ChildCompo from './Components/ChildCompo/ChildCompo';
import GrandCompo from './Components/GrandCompo/GrandCompo';
import Home from './Components/Home/Home';
import NavItem from './Components/NavItem/NavItem';
import ParentCompo from './Components/ParentCompo/ParentCompo';

function App() {
  return (
    <div className="App">
      <NavItem/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/grand' element={<GrandCompo />}/>
        <Route path='/parent' element={<ParentCompo />}/>
        <Route path='/child' element={<ChildCompo/>}/>
      </Routes>
    </div>
  );
}

export default App;
