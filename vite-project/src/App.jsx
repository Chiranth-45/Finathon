import {Route,BrowserRouter as Router, Routes} from 'react-router-dom';
import LandingPage from "./landing.jsx";
import './App.css';
import RegisterPage from './pages/Register.jsx';

const Home=()=> <h2>Home Page</h2>
const Login = () => <h2>Login Page</h2>;
//const Register = () => <h2>Register Page</h2>;
const AboutUs = () => <h2>About Us Page</h2>;
const Help = () => <h2>Help Page</h2>;


function App() {
   return (
   
<Router>
     <Routes>

     <Route path='/' element={<LandingPage/>}/>
     <Route path='/home' element={<Home/>}/>
     <Route path="/login" element={<Login />} />
      <Route path="/register" element={< RegisterPage/>} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/help" element={<Help />} />
     </Routes>
 </Router>

      
     
   
   );
}

export default App;