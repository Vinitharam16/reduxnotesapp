import React, { Fragment } from "react";
import './Sidebar.css';
import { AuthenticatedRoutes } from "../../Routes";
import { NavLink } from "react-router-dom";
import { setLoggedIn } from "../../Redux/Reducers/AuthenticationReducer";

export default function Sidebar() {
    // const boxicons = ['bx bx-home','bx bx-search','bx bx-file','bx bx-list-check','bx bx-archive-in','bx bx-trash']
    return (
        <div className="sidebar-container">
            <div className="login-container">
                {!setLoggedIn && (
                    <Fragment>
                         
                    </Fragment>
                )

                }
            {/* {!loggedIn && (
                            <React.Fragment>
                                <button
                                    className="btn"
                                    onClick={() => {
                                        setLoggedIn(true);
                                    }}>
                                    Login
                                </button>
                                <button>
                                    Signup
                                </button>
                            </React.Fragment>
                        )} */}


                <img src="https://cdn-icons-png.flaticon.com/512/5087/5087607.png" className="card-img-top" alt="userid" />
                <div className="user-id">
                    <div><b>John Doe</b></div>
                    <div>johndoe@gmail.com</div>
                </div>
            </div>
            <div className="nav-container">
                {
                    AuthenticatedRoutes.children.map((route, index) => (
                        <div className="icon-link nav-link">
                            <NavLink key={`${route.name}-${index}`} to={route.path}>
                                <i className={route.className}></i>
                                {route.name}
                            </NavLink>
                        </div>
                    ))
                }

                {/* <div className="icon-link nav-link active">
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
                <div className="icon-link nav-link">
                    <i className='bx bx-home'></i>
                    Home
                </div> */}

            </div>
        </div>
    );
}