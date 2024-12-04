
import { Link } from "react-router-dom";
import "./home.css"; // CSS for styling

export default function LandingPage() {
  return (
    <>
      <div className="home">
        {/* Header Section */}
        <header className="header">
          
          <nav className="navbar">
          <div role="button" className="no-underline">
              <Link to="" className="no-underline">Money Mastery</Link>
            </div>
          <div role="button" className="no-underline">
              <Link to="/home" className="no-underline">Home</Link>
            </div>
            <div role="button" >
              <Link to="/login" className="no-underline">Login</Link>
            </div>
            <div role="button" >
              <Link to="/register" className="no-underline">Register</Link>
            </div>
            <p>
              <Link to="/about-us" className="no-underline">About Us</Link>
            </p>
            <p>
              <Link to="/help" className="no-underline">Help</Link>
            </p>
          </nav>
        </header> 
        <img src="src/assets/logo.png" alt="Logo" className="logo"  style={{marginTop:"2rem", height:"19rem", width:"19rem"}}/>

        {/* Main Content Section */}
        {/* <div className="landingMainContainer">
          <h1>Welcome to Money Tracker</h1>
          <p>Track your finances with ease and efficiency.</p>
          <div role="button">
            <Link to="/get-started" className="cta-button">
              Get Started
            </Link>
          </div>
        </div> */}
      </div>
    </>
  );
}