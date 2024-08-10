import Entry from "components/Entry";
import Button from "components/Button";
import Alert from "components/Alert";

import { useState, useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

import { loginUser } from "api/AuthApi";

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [error, setError] = useState();
    const [setAlertView] = useOutletContext();

    useEffect(() => {
        if (error) {
            setAlertView(
                <Alert
                    type='error'
                    message={error.message}
                    setVisible={setAlertView}
                />
            );
        }
    }, [error, setAlertView]);

    const navigate = useNavigate();

    const loginClick = async () => {
        try {
            const user = { email, password };
            const data = await loginUser(user);

            localStorage.setObject("currentUser", data);

            navigate("/notes");
        } catch (e) {
            setError(e);
            setTimeout(() => {
                setError(null);
            }, 5000);
        }
    };

    return (
        <>
            <Entry placeholder='Email' text={email} setText={setEmail} />
            <Entry
                placeholder='Password'
                text={password}
                setText={setPassword}
                password
            />
            <Button text='Login' onClick={loginClick} />
            <div
                className='text-sm font-bold'
                onClick={() => {
                    navigate("/forgot-password");
                }}
            >
                Reset Password
            </div>
        </>
    );
}

export default Login;
