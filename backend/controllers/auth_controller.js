const User = require("../models/user");
const UserModel = new User();

const Response = require("../utils/response");

const login = async (req, res) => {
    const { email, password } = req.body;
    const result = await UserModel.login(email, password);

    new Response("Giriş başarılı...", result).success(res);
};

const signup = async (req, res) => {
    const { email, password, userData } = req.body;
    const result = await UserModel.create(email, password, userData);

    new Response("Kullanıcı başarıyla oluşturuldu...", result).created(res);
};

const forgotPassword = async (req, res) => {
    const { email } = req.body;
    await UserModel.sendResetPasswordEmail(email);

    new Response("E-posta gönderildi...").success(res);
};

const resetPassword = async (req, res) => {
    const { code, newPassword } = req.body;
    await UserModel.resetPassword(code, newPassword);

    new Response("Şifre değiştirildi...").success(res);
};

module.exports = { login, signup, forgotPassword, resetPassword };
