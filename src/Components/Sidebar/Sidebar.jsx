import React from "react";
import './Sidebar.css';

export default function Sidebar() {
    return (
        <div className="sidebar-container">
            <div className="login-container">
                <img src="https://cdn-icons-png.flaticon.com/512/5087/5087607.png" className="card-img-top" alt="userid" />
                <div className="user-id">
                    <div><b>John Doe</b></div>
                    <div>johndoe@gmail.com</div>
                </div>
            </div>
            <div className="nav-container">
                <div className="icon-link nav-link active">
                    <i className='bx bx-home'></i>
                    Home
                    {/* <Link to={'/home'} className='btn nav-link icon-link' >
                        <i className='bx bx-home'></i>
                        Home
                    </Link> */}
                </div>
                <div className="icon-link nav-link">
                    <i className='bx bx-home'></i>
                    Home
                </div>
                <div className="icon-link nav-link">
                    <i className='bx bx-home'></i>
                    Home
                </div>
                <div className="icon-link nav-link">
                    <i className='bx bx-home'></i>
                    Home
                </div>
                <div className="icon-link nav-link">
                    <i className='bx bx-home'></i>
                    Home
                </div>
                <div className="icon-link nav-link"> 
                    <i className='bx bx-home'></i>
                    Home
                </div>

            </div>
        </div>
    );
}