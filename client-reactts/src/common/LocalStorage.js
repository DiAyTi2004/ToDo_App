class LocalStorage {
    ls = window.localStorage

    removeItem = key => this.ls.removeItem(key);

    setItem(key, value) {
        value = JSON.stringify(value)
        this.ls.setItem(key, value)
        return true
    }

    getItem(key) {
        try {
            let value = this.ls.getItem(key)
            return JSON.parse(value)
        } catch (e) {
            return null
        }
    }

    getLoginUser() {
        return this.getItem("auth_user");
    }
}

export default new LocalStorage();