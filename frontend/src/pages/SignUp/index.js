import Entry from "components/Entry";
import Button from "components/Button";
import Alert from "components/Alert";

import { useState, useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

import { signupUser } from "api/AuthApi";

function SignUp() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [fullname, setFullname] = useState();

    const [error, setError] = useState();
    const [setAlertView] = useOutletContext();

    const navigate = useNavigate();

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

    const signUpClick = async () => {
        try {
            const user = { email, password, userData: { fullname } };
            const response = await signupUser(user);

            localStorage.setObject("currentUser", response.data);

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
                placeholder='Full Name'
                text={fullname}
                setText={setFullname}
            />
            <Entry
                placeholder='Password'
                text={password}
                setText={setPassword}
                password
            />
            <Button text='Sign Up' onClick={signUpClick} />
        </>
    );
}

export default SignUp;
