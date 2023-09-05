import { makeAutoObservable } from "mobx";

import { toast } from "react-toastify";

export default class AuthStore {

    constructor() {
        makeAutoObservable(this);
    }
}
