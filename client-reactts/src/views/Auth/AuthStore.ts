import axios from "axios";
import { makeAutoObservable } from "mobx";
import LocalStorage from "src/common/LocalStorage";
import { toast } from "react-toastify";
import ConstantList from "src/appConfig";
import { registerUser, authenticateUser } from "./AuthService";
import { UserModel } from "src/models/UserModel";

export default class AuthStore {

    constructor() {
        makeAutoObservable(this);
    }

    authenticateUser = async (user: UserModel) => {
        try {
            // debugger
            const data = await authenticateUser(user);
            console.log("checking data", data);
            // authenticateUser(user).then((response) => {
            //     if (response.data) {
            //         this.setUser({ user: response.data })
            //         return response.data;
            //     }
            // })
            toast.error("Login success");
        }
        catch (error) {
            console.error(error);
            toast.error("Login fail");
        }
    };

    logout = () => {
        this.setSession(null);
        this.removeUser();
    };

    setSession(token: any) {
        if (token) {
            LocalStorage.setItem("jwt_token", token);
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        } else {
            localStorage.removeItem("jwt_token");
            delete axios.defaults.headers.common["Authorization"];
        }
    }

    setLoginUser = (data: any) => {
        let user: any = {};
        user.token = data.access_token;
        this.setUser(user);
        return user;
    };

    //set token
    setLoginToken = (data: any) => LocalStorage.setItem("auth_token", data);
    setUser = (user: any) => LocalStorage.setItem("auth_user", user);
    removeUser = () => localStorage.removeItem("auth_user");
}
