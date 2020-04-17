class User {
    constructor(username, password) {
        this.username = username;
        this.password = password
    }
    validatePassword = () => {
        return this.password.length > 6 ? true : false;
    }

}