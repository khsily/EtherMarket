# 시작하기

**시작하기 전 필수적으로 다음 요소들이 설치되어 있어야 합니다.**

1. 트러플: ```$ npm install -g truffle@5.0.21```
2. 가나슈: https://www.trufflesuite.com/ganache
3. 메타마스크: https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn

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

```
$ cd client
$ npm install
$ npm start
```

## 3. server 프로젝트 시작하기 (아직 안됨)
```
$ cd server
$ npm install
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

## 6. 프로젝트 SPEC
1. CLIENT
  - REACT
  - MOBX
  - SCSS
2. SERVER
  - NODE / KOA
  - RESTFUL API
  - OAUTH2
  - ORM (sequelize)

## 7. TODOs
1. CLIENT
  - 메인 페이지
  - 로그인 페이지
  - 회원가입 페이지
  - 유저 정보 페이지
  - 상품 리스트 페이지
  - 상품 상세 페이지
  - 게시판 페이지
2. SERVER
  - 유저
  - 유저 등급
  - 상품
  - 상품 댓글
  - 게시판 (qna, 공지사항)
  - 게시판 댓글
  - 거래내역 (해시 주소 포함)
  - 유저 블랙리스트
