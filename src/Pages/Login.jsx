import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoggedIn } from "../Redux/Reducers/AuthenticationReducer";

export default function Login(){
    const dispatcher = useDispatch();
    const navigator = useNavigate();
    const initial = {
        firstname: "",
        lastname: "",
    }
    const [loginid,setLoginid] = useState(initial);

    function login() {
        dispatcher(setLoggedIn(true));
        navigator("/app/notes");
    }
    return (
        <div>
            {/* <input id="firstName"
                name="firstName"
                placeholder="Enter your First Name"
                value={loginid}/> */}
            <button onClick={login}>
                Login
            </button>

            {/* {!loggedIn && (
                <React.Fragment>
                    <button
                        className="btn"
                        onClick={() => {
                            setLoggedIn(true);
                            navigate("/app/notes");
                        }}>
                        Login
                    </button>
                </React.Fragment>
            )} */}
        </div>
    );
}