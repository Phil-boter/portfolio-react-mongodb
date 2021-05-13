import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { login } from "../redux/actions";
import Navigation from "./Navigation";

export default function Login({ setIsVisible, visible, initialState }) {
    const dispatch = useDispatch();
    const history = useHistory();

    const admin = useSelector((state) => {
        // console.log("state", state);
        return state.admin;
    });

    const error = useSelector((state) => {
        return state.error;
    });

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [text, setButtontext] = useState("Login");

    useEffect(() => {
        if (admin) {
            setButtontext("Manage Projects");
            return history.push("/manageProjects");
        } else {
            return;
        }
    }, [admin, history]);

    const handleEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    };

    return (
        <>
            <Navigation
                setIsVisible={setIsVisible}
                visible={visible}
                initialState={initialState}
            />
            <div className="admin-container">
                <div className="login-container"></div>
                <form>
                    <div>
                        <input
                            type="text"
                            name="email"
                            autoComplete="email"
                            placeholder="Email"
                            onChange={(e) => handleEmail(e)}
                        ></input>
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            autoComplete="current-password"
                            onChange={(e) => handlePassword(e)}
                        ></input>
                    </div>
                </form>
                <div>
                    <button
                        disabled={(email.length < 1, password.length < 1)}
                        className="toggle-button login"
                        onClick={() => dispatch(login(email, password))}
                    >
                        {text}
                    </button>
                </div>
                {error && <h1>{error.response.data.msg}</h1>}
            </div>
        </>
    );
}
