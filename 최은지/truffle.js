// truffle.js config for klaytn.
const PrivateKeyConnector = require('connect-privkey-to-provider')
const NETWORK_ID = '1001'
const GASLIMIT = '20000000'
const URL = 'https://api.baobab.klaytn.net:8651'
const PRIVATE_KEY = '0x92ff30fb03bdc8a724ff57af451454b2a03f6d656ee68eca0a63dd647c745a67'


module.exports = {
    networks : {
        klaytn : {
            provider : new PrivateKeyConnector(PRIVATE_KEY, URL),
            network_id : NETWORK_ID,
            gas: GASLIMIT,
            gasPrice: null,
        }
    },
}