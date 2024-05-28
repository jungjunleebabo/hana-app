
#Next-Auth 사용해 보기#

'npm i next-auth 
'npm install @types/node

SECRET_KEY 만들기
'npx auth secret

#구글로그인
https://console.cloud.google.com/apis/dashboard
http://localhost:3000/api/auth/callback/google

#네이버로그인
https://developers.naver.com/products/login/api/api.md

서비스 URL: http://localhost:3000
Callback URL: http://localhost:3000/api/auth/callback/naver

#카카오로그인
https://developers.kakao.com/
Redirect URI: http://localhost:3000/api/auth/callback/kakao
REST API키 가 KAKAO_CLIENT_ID 
제품설정 > 보안 메뉴에 가면 카카오로그인 ON을 할 수 있는데, 거기에 나오는 코드가 KAKAO_CLIENT_SECRET