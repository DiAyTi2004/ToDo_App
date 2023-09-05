import { makeAutoObservable } from "mobx";

import { toast } from "react-toastify";

import i18n from "i18n";

export default class CountryStore {
    
    constructor() {
        makeAutoObservable(this);
      }
}
