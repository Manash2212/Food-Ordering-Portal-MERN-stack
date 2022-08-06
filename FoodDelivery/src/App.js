import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './components/navbar/Navbar';
import Routess from './Routes/routes';
//import Category from './components/category';


function App() {
  return (
    <>
    <div className='App'>
   <Navbar/>
   <Routess/>
  
   
   </div>
   </>
  );
}

export default App;
