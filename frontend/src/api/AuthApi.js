import { post } from "./api";

const signupUser = user => {
    return post("/auth/signup", user);
};

const loginUser = user => {
    return post("/auth/login", user);
};

const forgotPassword = data => {
    return post("/auth/forgot-password", data);
};

const resetPassword = data => {
    return post("/auth/reset-password", data);
};

export { signupUser, loginUser, forgotPassword, resetPassword };
