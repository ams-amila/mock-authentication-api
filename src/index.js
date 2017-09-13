let us = [];
let nl = 500;

exports.getUserStore = () => us;

exports.getNetworkLatency = () => nl;

exports.configure = (netWorkLatency, userStore) => {
    us = userStore;
    nl = netWorkLatency;
};

exports.authenticate = (username, password) => {
    if (us.length === 0) {
        throw new Error('Empty User Store');
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let user = us.find((user) => user.username === username && user.password === password);
            if (user) {
                delete user.password;
                resolve(user);
            } else {
                reject('Invalid User Credentials');
            }
        }, nl);
    });
};