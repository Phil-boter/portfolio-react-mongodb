import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { registration } from "../redux/actions";

export default function Registration() {
    const dispatch = useDispatch();

    const error = useSelector((state) => {
        return state.error;
    });

    const [firstName, setFirst] = useState("");
    const [lastName, setLast] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [register, setShowregister] = useState(true);

    const handleFirst = (e) => {
        e.preventDefault();
        setFirst(e.target.value);
    };
    const handleLast = (e) => {
        e.preventDefault();
        setLast(e.target.value);
    };

    const handleEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    };

    const showRegistration = () => {
        setShowregister(false);
    };

    const Register = (e) => {
        e.preventDefault();
        dispatch(registration(firstName, lastName, email, password));
    };

    return (
        <>
            <div>
                {register ? (
                    <>
                        <button
                            onClick={() => showRegistration()}
                            className="toggle-button login"
                        >
                            Create a new administrator
                        </button>
                    </>
                ) : (
                    <>
                        <div>
                            <button
                                onClick={() => setShowregister(true)}
                                className="toggle-button login"
                            >
                                Close Input
                            </button>
                            <form>
                                <div>
                                    <input
                                        type="text"
                                        name="first"
                                        placeholder="First name"
                                        onChange={(e) => handleFirst(e)}
                                    ></input>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="last"
                                        placeholder="Last name"
                                        onChange={(e) => handleLast(e)}
                                    ></input>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="Email"
                                        onChange={(e) => handleEmail(e)}
                                    ></input>
                                </div>
                                <div>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        onChange={(e) => handlePassword(e)}
                                    ></input>
                                </div>
                            </form>
                        </div>

                        <div>
                            <button
                                disabled={
                                    (firstName.length < 1,
                                    lastName.length < 1,
                                    email.length < 1,
                                    password.length < 1)
                                }
                                className="toggle-button login"
                                onClick={(e) => Register(e)}
                            >
                                Create
                            </button>
                        </div>
                    </>
                )}
                {error && <h1>{error.response.data.msg}</h1>}
            </div>
        </>
    );
}
