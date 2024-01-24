import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import './Applayout.css';

export default function Applayout( {children} ){
    return (
        <div className="app-container">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="content-container">
                {children}
            </div>
        </div>
    );
}