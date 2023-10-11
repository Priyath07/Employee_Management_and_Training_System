import './App.css';
import {BrowserRouter , Routes , Route, Link} from "react-router-dom"

import TransportApp from './TransportApp';

function App() {
  return (
    <BrowserRouter>
 
      
        <Routes>
          <Route path="/TransportApp" exact element={<TransportApp/>}/>
          
          
        </Routes>
    </BrowserRouter>
  );
}

export default App;