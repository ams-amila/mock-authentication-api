class AuthenticationApi {
    constructor(){
        this.userStore = [];
        this.netWorkLatency = 500;
    }
    configure(netWorkLatency,userStore){
        this.userStore = userStore;
        this.netWorkLatency = netWorkLatency;
    }
    authenticate(username, password) {
        if(this.userStore.length == 0){
            throw new Error('Empty User Store');
        }
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let user = this.userStore.find((user) => user.username === username && user.password === password);
                if (user) {
                    delete user.password;
                    resolve(user);
                } else {
                    reject('Invalid User Credentials');
                }
            }, this.netWorkLatency);
        });
    }
};

exports.AuthenticationApi = new AuthenticationApi();