import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoggedIn } from "../Redux/Reducers/AuthenticationReducer";

export default function Login(){
    const dispatcher = useDispatch();
    const navigator = useNavigate();

    function login() {
        dispatcher(setLoggedIn(true));
        navigator("/app/notes");
    }
    return (
        <div>
            <button onClick={login}>
                Login
            </button>
        </div>
    );
}