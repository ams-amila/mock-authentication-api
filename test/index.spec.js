import {expect} from 'chai';
import {AuthenticationApi} from '../src/';

describe('Test AuthenticationApi with default configurations', () => {
    it('has empty User Store', () => {
        expect(AuthenticationApi.userStore.length).to.equal(0);
    });
    it('has 500 as Network Latency', () => {
        expect(AuthenticationApi.netWorkLatency).to.equal(500);
    });
    it('should throw error when authenticate with default configurations', () => {
        expect(() => AuthenticationApi.authenticate('abc', 'abc')).to.throw('Empty User Store');
    });
});

describe('Test AuthenticationApi with custom configurations', () => {
    beforeEach(()=>{
        AuthenticationApi.configure(1000,[
            {id:1,username:'User1',password:'pass1'},
            {id:2,username:'User2',password:'pass2'}
            ]);
    });
    it('has empty User Store', () => {
        expect(AuthenticationApi.userStore.length).to.equal(2);
    });
    it('has 500 as Network Latency', () => {
        expect(AuthenticationApi.netWorkLatency).to.equal(1000);
    });
    it('should return authenticated user for successful authentication.', async () => {
        const authenticatedUser = await AuthenticationApi.authenticate('User1', 'pass1');
        expect(authenticatedUser).to.not.equal(null);
        expect(authenticatedUser.id).to.equal(1);
        expect(authenticatedUser.username).to.equal('User1');
        expect(authenticatedUser.password).to.equal(undefined);
    });
});