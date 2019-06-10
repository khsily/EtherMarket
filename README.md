# 시작하기

**시작하기 전 필수적으로 다음 요소들이 설치되어 있어야 합니다.**

1. 트러플: ```$ npm install -g truffle@5.0.21```
2. 가나슈: https://www.trufflesuite.com/ganache

Note: 가나슈 설치후 기본 개발환경 세팅까지 완료해주세요! (**port: 8545**)

## 1. 기본 설정

1. 스마트 계약 compile 및 migrate.
```
$ truffle compile
$ truffle migrate
```
**NOTE: compiler 버전 에러가 생기는 경우, 현재 설치된 truffle 버전이 5.0.21 이상이 맞는지 확인해주세요!**
**NOTE: Could not connect to your Ethereum client with the following parameters 라고 나오면서 migrate가 되지 않는 경우, ganache 서버를 실행하고 (실행한채로 두고) 포트가 8545가 맞는지 확인한 후 다시 시도해보세요!**

## 2. client 프로젝트 시작하기

1. client 폴터로 이동합니다.
```
$ cd client
```

2. package.json에 정의된 모듈들을 설치합니다.
```
$ npm install
```

3. react앱을 실행합니다.
```
$ npm start
```

## 3. server 프로젝트 시작하기 (아직 안됨)
1. server 폴터로 이동합니다.
```
$ cd server
```

2. package.json에 정의된 모듈들을 설치합니다.
```
$ npm install
```

3. node 서버를 실행합니다.
```
$ npm start
```

## 4. testing
1. 계약 테스팅
```
$ truffle test
```

2. Jest를 사용한 react 컴퍼넌트 테스팅
```
npm run test
```

## 5. 프로덕션
```
// 실행하기전 client 폴더에 있는지 확인하세요!
npm run build
```