// truffle.js config for klaytn.


const PrivateKeyConnector = require('connect-privkey-to-provider')
const NETWORK_ID = '1001'
const GASLIMIT = '20000000'
const URL = 'https://api.baobab.klaytn.net:8651'
const PRIVATE_KEY = '0xd5d59def473e144f3dcf7050442ef717445f9f5e3e1cb4f1b603e142f4151f5b'


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