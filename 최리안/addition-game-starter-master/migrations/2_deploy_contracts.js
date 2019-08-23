const fs = require('fs')
const AdditionGame = artifacts.require('./AdditionGame.sol')

module.exports = function (deployer) {
  deployer.deploy(AdditionGame)
  .then(() => { // 배포후 then을 통해 프로미스로 json 데이터를 받아냄
		if(AdditionGame._json) {
			// 파일에 저장
			fs.writeFile('deployedABI', JSON.stringify(AdditionGame._json.abi), 
				(err) => {
					if (err) throw err;
					console.log("파일에 ABI 입력 성공")
				}
			)

			fs.writeFile('deployedAddress', AdditionGame.address,
				(err) => {
					if (err) throw err;
					console.log("파일에 주소 입력 성공")
				}
			)
		}
  })
}

// 배포하는 과정에 쓰이는 로직이 담겨 있다
// 에디션게임 컨트랙트를 가져와서 노드에 배포
// 배포하는 과정에서 얻을 수 있는 몇가지 정보들을 BApp 내에 어떤 파일들에다가 저장하는 코드를 작성
// 나중에 그 데이터를 통해 컨트랙 인스턴스를 만드는데 아주 유용하게 쓰임