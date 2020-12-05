import React,{useState} from 'react';
import '../App.scss';
import Navbar from '../Components/Navbar';
import About from '../Components/About';
import Contact from '../Components/Contact';
import Portfolio from '../Components/Portfolio';
import Home from '../Components/Home';
import Footer from '../Components/Footer';
import SideDrawer from '../Components/SideDrawer';
import Backdrop from '../Components/Backdrop';


const App = () => {
const [drawer,setdrawer] = useState<boolean>(false);
 let backdrop;
 let sidedrawer;

 if(drawer) {
   sidedrawer = <SideDrawer/>;
   backdrop = <Backdrop closer={() =>{
    setdrawer(false)
  }}/>;
 }
  return (
    <div style={{color:"100%"}}>
      <Navbar  clicker={()=>{
        setdrawer(!drawer)
      }} />
      {sidedrawer}
      {backdrop}
       <Home/>
       <About/>
       <Portfolio/>
       <Contact/>
       <Footer/>
    </div>
    
  );
}

export default App;
