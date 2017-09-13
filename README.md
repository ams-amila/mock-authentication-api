# mock-authentication-api
Mock Authentication API is a utility module which provides straight-forward way to mocking authentication in your app. User needs to provide application's user store and use relevant APIs to manage authentication related operations

## Installation

To install mock-authentication-api, use [npm](http://github.com/npm/npm):

```
npm install momittedhentication-api
```

## Usage

```javascript
import {AuthenticationApi} from 'mock-authentication-api';

// setting configurations (netWorkLatency,userStore)
AuthenticationApi.configure(netWorkLatency,userStore);

// authenticating user
AuthenticationApi.authenticate(username,password);
// >> a promise

```
### Example
```javascript
import {AuthenticationApi} from 'mock-authentication-api';

const netWorkLatency = 1000;
const userStore = [
    {id:1,username:'User1',password:'pass1'},
    {id:2,username:'User2',password:'pass2'}
];

AuthenticationApi.configure(netWorkLatency,userStore);

// authenticating user
AuthenticationApi.authenticate('User1','pass1').then(user => {
    // no password field on user response
    console.log(`${user.username} logged in`)
}).catch(err => {
    console.log(err);//Invalid User Credentials
});
```

## API

`mock-authentication-api.`

- `configure(netWorkLatency, userStore)` - setting authentication configs
  - `netWorkLatency` - used to simulate network latency {Number} {milliseconds}[REQUIRED]
  - `userStore` - user details store which is going to use for authentication {Objects} {username and password are mandatory fields}[REQUIRED]
- `authenticate(username, password)` - authenticate the user according to provided username and password. Returns a promise.
  - `username` - username of the user who is trying to authenticated.[REQUIRED]
  - `password` - password of the user who is trying to authenticated.[REQUIRED]
  - Returns authenticated `user` for `successfull` authentication 
  - Returns `Invalid User Credentials` for `unsuccessfull` authentication 