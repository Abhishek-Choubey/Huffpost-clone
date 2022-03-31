import './App.css';
import React from 'react';
import  {Navbar}  from './components/Navbar/Navbar';
import {Footer} from "./components/Footer/Footer"

import{motion} from"framer-motion"
import{Sidebar} from "./components/Sidebar/Sidebar"

function App() {
   const [sidebar, setsidebar] = React.useState(false)

   const togglestate=()=>{
     setsidebar(!sidebar)
   }

  return (
    <div className="App">


      
       <Sidebar sidebar={sidebar} togglestate={togglestate}/>
       <div className={sidebar?"App__child":"App__child child__width" }>
       <Navbar state={togglestate}/>
       <Footer/>
      </div> 

    </div>
  );
}

export default App;
