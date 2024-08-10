import Entry from "components/Entry";
import Button from "components/Button";
import Alert from "components/Alert";

import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

import { forgotPassword } from "api/AuthApi";

function ForgotPassword() {
    const [email, setEmail] = useState();

    const [error, setError] = useState();
    const [success, setSuccess] = useState(false);
    const [setAlertView] = useOutletContext();

    useEffect(() => {
        if (error) {
            setSuccess(null);
            setAlertView(
                <Alert
                    type='error'
                    message={error.message}
                    setVisible={setAlertView}
                />
            );
        } else setAlertView();
    }, [error, setAlertView]);

    useEffect(() => {
        if (success) {
            setError(null);
            setAlertView(
                <Alert
                    type='success'
                    message='Email gönderildi. Posta kutunuzu kontrol ediniz...'
                    setVisible={setAlertView}
                />
            );
        } else setAlertView();
    }, [success, setAlertView]);

    const sendClick = async () => {
        try {
            await forgotPassword({ email });
            setSuccess(true);
            setTimeout(() => {
                setSuccess(null);
            }, 5000);
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
            <Button text='Send Email' onClick={sendClick} />
        </>
    );
}

export default ForgotPassword;
