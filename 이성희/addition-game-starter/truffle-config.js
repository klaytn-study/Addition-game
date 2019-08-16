// truffle.js config for klaytn.
const PrivateKeyConnector = require('connect-privkey-to-provider')
const NETWORK_ID = '1001'
const GASLIMIT = '20000000'
const URL = 'https://api.baobab.klaytn.net:8651'
const PRIVATE_KEY = '0xde3715675b315c4325ef235d568328f04886b46370695f1b1ae978ce8afac051' // 싱글 따옴표 안에 자신의 프라이빗 키 입력하세요.

// 스마트 컨트랙트를 배포할 수 있는 간단한 기본 설정
module.exports = {
    networks: {
        klaytn: {
            provider: new PrivateKeyConnector(PRIVATE_KEY, URL),
            network_id: NETWORK_ID,
            gas: GASLIMIT,
            gasPrice: null,
        }
    }
}