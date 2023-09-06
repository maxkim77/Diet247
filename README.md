![Diet 24 7](https://github.com/maxkim77/Diet247/assets/141907655/9c5c2cb1-de29-4af2-829b-208fc6412436)


# 📌Diet24/7: 맞춤형 다이어트 식단 웹 플랫폼 프로젝트 기획안


![슬라이드3](https://github.com/maxkim77/Diet247/assets/141907655/03e17fac-0035-4b40-9bbd-bf6e452b8b3d)


## 0. 소개🎉


**0.1 배경**

- 현대 사회에서 **비만과 관련된 질병**은 점점 늘어나고 있으며, 이에 따라 **다이어트와 체중 관리**에 대한 관심도 증가하고 있습니다. 하지만 인터넷에는 허위 정보나 미확인 정보가 넘쳐나, 신뢰할 수 있는 정보와 지원을 찾기 어렵습니다. 또한, 많은 사람들이 단기간에 빠른 결과를 원하다가 실패하거나 건강을 해치는 경우가 빈번합니다.


**0.2 소개**

- 지속 가능한 **다이어트와 체중 관리를 지원하는 종합적인 웹 플랫폼**입니다. 이 웹사이트는 식단 관리, 운동 계획, 영양 정보, 그리고 커뮤니티 지원을 한 곳에서 제공하여 사용자가 목표 체중과 건강한 생활 습관을 쉽게 얻을 수 있도록 돕습니다.


# ✔프로젝트 세부사항

## 1.프로젝트 목표 및 요구사항✨


![슬라이드4](https://github.com/maxkim77/Diet247/assets/141907655/d9665a60-9b15-4735-ae44-a8e93e26b030)



**1.1 목표**

- Diet 24/7은 사용자의 식단 선호, 영양 필요성, 목표 체중 등을 고려하여 맞춤형 식단을 자동으로 생성하는 웹 플랫폼입니다. 

이 서비스의 목적은 다음과 같습니다:


1) **개인화된 식단 제공**: 각 사용자의 몸 상태와 목표에 맞는 식단을 제공합니다.


2) **영양 균형**: 영양소의 균형을 맞춘 식단을 제공하여 건강을 유지합니다.


3) **사용자 편의성**: 실시간 챗봇 상담을 통해 사용자의 불편 사항을 해결합니다.


4) **데이터 기반 의사결정**: 사용자의 식단과 피드백을 데이터로 수집하여 지속적으로 서비스를 개선합니다.


**1.2 구현기능 요구사항**


**1) 질문을 HTTP로 요청 및 응답 받기**


- 전송 버튼 클릭, Enter키 입력 두 가지 방식으로 HTTP 요청을 보냅니다.

  
- HTTP 요청시 input창을 초기화 합니다.


**2) 질문과 답변을 화면에 출력**


- HTTP 요청시에 사용자의 질문을 화면에 출력합니다.

  
- HTTP 응답이 돌아오면 AI의 답변을 화면에 출력합니다.

  
- 한번의 요청에 하나의 질문과 답변이 출력됩니다.



## 2. 개발 환경 및 설계🎈


![슬라이드5](https://github.com/maxkim77/Diet247/assets/141907655/355e6efa-ef3a-468e-a3bf-ddb7f9cae9c6)


**2.1 개발 환경**


- Frontend: HTML, CSS


- Backend: JavaScript, Jquery


- API: ChatGPT API, Tawk API, Disqus API


**2.2 개발 일정(WBS)**


📌https://cloud-kale-960.notion.site/24a89e9a89284a12a6756c756be0d5cd?v=be385651648e4a4f92478eb4ee96b23e&pvs=4


**2.3 개인 프로젝트: 🤵총괄 김정원**


**2.4 배포 URL:**


📌 https://maxkim77.github.io/Diet247/


## 3. 프로젝트 설계 및 세부사항🎉


![슬라이드6](https://github.com/maxkim77/Diet247/assets/141907655/1deca16a-2e0a-4cf4-a349-2845f82676eb)


**3.1 프로젝트 구조**

📦Diet 24.7


 ┣ 📂IMG

 
 ┣ 📜common.css
 
 ┣ 📜index.js
  
 ┣ 📂HTML

 
 ┣ 📜Home.html
 
 
 ┣ 📜index.html
 
 
 ┣ 📜section1.html
 
 
 ┣ 📜section2.html
 
 
 ┗ 📜section3.html

**Git hub에서는 각 HTML 별로 리포티토리 생성**
  
**3.2 기능 구조**



- Main Components


![CPT2309061002-1898x920 (2)](https://github.com/maxkim77/Diet247/assets/141907655/1d4c267b-0ffa-406e-983a-41b5e926fb01)

**<Home Page: 홍보동영상 배경 첨부>**


![CPT2309060940-1904x908-min (1) (2)](https://github.com/maxkim77/Diet247/assets/141907655/c4ccd9ea-ad41-4a78-882e-8d98af2b4ce9)


**<Diet Plan: 사용자 정보 입력 (체중, 목표 체중, 알레르기 등), 자동 생성된 식단 페이지 생성 및 저장 기능(Chat GPT 활용)>**


![CPT2309060939-1878x901-min](https://github.com/maxkim77/Diet247/assets/141907655/8ced99c4-a700-4ee8-959e-4c9075064ad6)


**<Food Info : 건강식단 식품 정보 제공(쿠팡링크)>**


![ezgif com-optimize (1)-min](https://github.com/maxkim77/Diet247/assets/141907655/53f44127-3a65-4f95-8cea-61684d3e1c10)


**<Communication:실시간 댓글 기능추가(Disqus)>**


![CPT2309061045-1904x902 (1)](https://github.com/maxkim77/Diet247/assets/141907655/831c9f9d-d660-4339-9380-dfa7ea08aad9)


**<Contact point:실시간 챗봇 상담(Tawk)>**


**3.3 UI / BM**


![슬라이드7](https://github.com/maxkim77/Diet247/assets/141907655/2b127494-f1ee-42bb-9140-38b2ac6f86f7)


![슬라이드8](https://github.com/maxkim77/Diet247/assets/141907655/f96c45df-2fc4-4a18-af99-01b1dfc560be)


## 4. 구현 기능 요약🎁


![슬라이드9](https://github.com/maxkim77/Diet247/assets/141907655/2804c661-715e-4993-be70-4b421b9d02b4)


**4.1 메인 기능**


- 사용자 정보 입력


- 식단 자동 생성 및 HTML 저장기능


**4.2 추가 기능**


- 커뮤니티 게시판


- 건강식품 정보 제공


- 실시간 채팅 상담 기능

**4.3 수익화 기능 – 쿠팡파트너스 연동**


- 쿠팡파트너스 연동


- 추후 아마존 연동 예정


- 상용화 후 구글 애드센스 연동 예정


## 5. 느낀점 및 개선점🎨


![슬라이드10](https://github.com/maxkim77/Diet247/assets/141907655/12ba92f8-1255-435d-8849-f0b388f4ceeb)



**5.1 알게된 점**
- 한개의 Repository에서 여러 HTML을 업로드시 404에러 해결법
  
깃허브에서 여러 HTML 연결시 여러 Repository를 생성해서 링크를 연결시키면 해결됩니다.
- 이미지나 CSS반영 오류
  
리포지토리 경로를 해당하는 이미지와 CSS이름 앞에 붙여줘야 제대로 반영이되었습니다.
- 자바스크립트 활용법
  
자바스크립트를 이용하면 버튼을 이용해서 한개의 HTML안에서 여러 페이지화면을 보여줄수있다는 점을 깨달았고 다시한번 동작형 언어가 어떤것인지에 대해 알 수 있었습니다.


**5.2 느낀점**
- ChatGPT API의 활용성이 높아 개발 시간을 단축할 수 있었습니다.
- 사용자의 다양한 요구사항을 충족시키기 위해 계속 업데이트가 필요함을 느꼈습니다.
- 기획을 꼼꼼히 하는 것이 중요하다는 것을 느꼈습니다.


**5.3 개선점**
- 자바스크립트 및 CSS 코드 개인공부 필요하다는 점을 알았습니다.
- 챗GPT 의존도 높음, 코드 필사 및 공부를 할 예정입니다.
- 추후 자바스크립트로 여러 HTML 페이지 구조에서 단일 HTML 페이지로 변환할 예정입니다.

## 🎞별첨 : 프로모션 영상


https://github.com/maxkim77/Diet247/assets/141907655/9c5bd0b6-ecf8-4d46-89ab-a956b3e8185d

## 🎀Thank you for watching
![Diet 24 7-41](https://github.com/maxkim77/Diet247/assets/141907655/40c6dca9-8d2f-4b7e-8ca5-b5811b1a30a2)


