import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "pages/Login";
import SignUp from "pages/SignUp";
import ForgotPassword from "pages/ForgotPassword";
import ResetPassword from "pages/ResetPassword";
import Notes from "pages/Notes";

import AuthLayout from "layouts/AuthLayout";

import PrivateRoute from "./PrivateRoute";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route path='/auth' element={<AuthLayout />}>
                        <Route
                            index
                            element={<Navigate to='/auth/login' replace />}
                        />
                        <Route index path='login' element={<Login />} />
                        <Route path='signup' element={<SignUp />} />
                        <Route
                            path='forgot-password'
                            element={<ForgotPassword />}
                        />
                        <Route
                            path='reset-password'
                            element={<ResetPassword />}
                        />
                    </Route>
                </Route>
                <Route path='/' element={<PrivateRoute />}>
                    <Route path='notes' element={<Notes />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
