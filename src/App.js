import logo from './logo.svg';
import './App.scss';
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserMange from './UserMange';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Routes>
     <Route index element ={<Home/>}/>
      
      <Route path='/user-save' element ={<UserMange/>}/>
      
     </Routes>
     
    
     </BrowserRouter>


    
    </div>
  );
}

export default App;
