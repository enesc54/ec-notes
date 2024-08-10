const { auth, db } = require("../firebase");
const {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    confirmPasswordReset
} = require("firebase/auth");
const { setDoc, doc, getDoc, collection } = require("firebase/firestore");

const ApiError = require("../utils/error");

class User {
    constructor() {
        this.auth = auth;
        this.db = db;
    }
    async create(email, password, userData) {
        var result;
        await createUserWithEmailAndPassword(this.auth, email, password)
            .then(userCredential => {
                const { localId: userId } = userCredential.user.reloadUserInfo;
                setDoc(doc(this.db, "users", userCredential.user.uid), {
                    ...userData,
                    email: email
                });
                result = {
                    userId: userId,
                    userData: userData
                };
            })
            .catch(e => {
                const error = new ApiError("Kayıt başasrısız...", 400);

                throw error;
            });
        return result;
    }

    async login(email, password) {
        var result;
        await signInWithEmailAndPassword(this.auth, email, password)
            .then(async userCredential => {
                const { localId: userId } = userCredential.user.reloadUserInfo;

                await getDoc(doc(collection(this.db, "users"), userId))
                    .then(user => {
                        result = {
                            userId: userId,
                            userData: user.data()
                        };
                    })
                    .catch(e => {
                        throw new ApiError("Giriş başarısız...", 400);
                    });
            })
            .catch(e => {
                throw new ApiError("Giriş başarısız...", 400);
            });
        return result;
    }

    async sendResetPasswordEmail(email) {
        await sendPasswordResetEmail(this.auth, email).catch(e => {
            throw new ApiError("E-posta gönderilemedi...", 400);
        });
    }

    async resetPassword(code, newPassword) {
        await confirmPasswordReset(this.auth, code, newPassword).catch(e => {
            throw new ApiError("Şifre değiştirilemedi...", 400);
        });
    }
}

module.exports = User;
