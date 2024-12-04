
//import withAuth from '../utils/withAuth'
// import { useNavigate } from 'react-router-dom'
import "../App.css";
import { Button } from '@mui/material';

function HomeComponent() {

    return (
        <>
            <div className="navBar">
                <div style={{ display: "flex", alignItems: "center" }}>
                    <h2>Money Mastery</h2>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Button onClick={() => {
                        localStorage.removeItem("token")
                        // navigate("/auth")
                    }}>
                        Logout
                    </Button>
                </div>
            </div>
            <div className="meetContainer">
                <div className="leftPanel">
                    <div>
                        <h2>Providing Quality Video Call Just Like Quality Education</h2>

                        <div style={{ display: 'flex', gap: "10px" }}>
      </div>
                    </div>
                </div>
                <div className='rightPanel'>
                    <img srcSet='/logo.png' alt="" />
                </div>
            </div>
        </>
    )
}
export default (HomeComponent);