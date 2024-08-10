import Entry from "components/Entry";
import Button from "components/Button";
import Alert from "components/Alert";

import { useState, useEffect } from "react";
import {
    useNavigate,
    useSearchParams,
    useOutletContext
} from "react-router-dom";

import { resetPassword } from "api/AuthApi";

function ResetPassword() {
    const [searchParams] = useSearchParams();
    var oobCode = searchParams.get("oobCode");

    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

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

    const resetClick = async () => {
        if (password && password === confirmPassword) {
            try {
                const data = {
                    code: oobCode,
                    newPassword: password
                };
                await resetPassword(data);
                navigate("/auth/login");
            } catch (e) {
                setError(e);
                setTimeout(() => {
                    setError(null);
                }, 5000);
            }
        } else {
            setError({ message: "Girilen şifreler aynı değil..." });
        }
    };

    return (
        <>
            <Entry
                password
                placeholder='Password'
                text={password}
                setText={setPassword}
            />
            <Entry
                password
                placeholder='Confirm Password'
                text={confirmPassword}
                setText={setConfirmPassword}
            />
            <Button text='Reset Password' onClick={resetClick} />
        </>
    );
}

export default ResetPassword;
