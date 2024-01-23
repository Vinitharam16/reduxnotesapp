import React from "react";
import MyNotes from "../Components/MyNotes/MyNotes";
import './Home.css';

export default function Home() {
    return (
        <div className="home-container">
            <div className="home-title">
                <h2><b>Welcome John</b></h2>
            </div>
            <MyNotes />
        </div>
    );
}