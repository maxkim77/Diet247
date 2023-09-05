# Diet24/7: 개인화된 다이어트 식단 웹 플랫폼 기획안
**소개**
다이어트는 건강하고 지속 가능한 다이어트와 체중 관리를 지원하는 종합적인 웹 플랫폼입니다. 이 웹사이트는 식단 관리, 운동 계획, 영양 정보, 그리고 커뮤니티 지원을 한 곳에서 제공하여 사용자가 목표 체중과 건강한 생활 습관을 쉽게 얻을 수 있도록 돕습니다.


**배경**
현대 사회에서 비만과 관련된 질병은 점점 늘어나고 있으며, 이에 따라 다이어트와 체중 관리에 대한 관심도 증가하고 있습니다. 하지만 인터넷에는 허위 정보나 미확인 정보가 넘쳐나, 신뢰할 수 있는 정보와 지원을 찾기 어렵습니다. 또한, 많은 사람들이 단기간에 빠른 결과를 원하다가 실패하거나 건강을 해치는 경우가 빈번합니다.

# 프로젝트 세부사항

**1.프로젝트 목표 및 요구사항**

**1.1 목표**

Diet 24/7은 사용자의 식단 선호, 영양 필요성, 목표 체중 등을 고려하여 맞춤형 식단을 자동으로 생성하는 웹 플랫폼입니다. 

이 서비스의 목적은 다음과 같습니다:

개인화된 식단 제공: 각 사용자의 몸 상태와 목표에 맞는 식단을 제공합니다.


영양 균형: 영양소의 균형을 맞춘 식단을 제공하여 건강을 유지합니다.


사용자 편의성: 실시간 챗봇 상담을 통해 사용자의 불편 사항을 해결합니다.


데이터 기반 의사결정: 사용자의 식단과 피드백을 데이터로 수집하여 지속적으로 서비스를 개선합니다.

**1.2 요구 구현 기능사항**


- 질문을 HTTP로 요청 및 응답 받기


- 질문과 답변을 화면에 출력


**1) 질문을 HTTP로 요청 및 응답 받기**


- 전송 버튼 클릭, Enter키 입력 두 가지 방식으로 HTTP 요청을 보냅니다.

  
- HTTP 요청시 input창을 초기화 합니다.


**2) 질문과 답변을 화면에 출력**


- HTTP 요청시에 사용자의 질문을 화면에 출력합니다.

  
- HTTP 응답이 돌아오면 AI의 답변을 화면에 출력합니다.

  
- 한번의 요청에 하나의 질문과 답변이 출력됩니다.


**1.3 정보 구조 설계**


Main Components


Home Page: 서비스 소개 및 사용자 가이드


User Profile: 사용자 정보 입력 (체중, 목표 체중, 알레르기 등)


Diet Plan: 자동 생성된 식단 페이지


Chat Support: 실시간 챗봇 상담


Comment : 실시간 댓글 기능 추가


Food Info: 건강식단 식품 정보 제공(쿠팡링크)


**1.4 화면 설계 (스토리 보드)**
Home Page
서비스 소개 및 가이드


User Profile
체중, 목표 체중, 알레르기 등을 입력하는 폼
저장 버튼


Diet Plan
일자별로 정렬된 식단 카드
각 식단에는 아침, 점심, 저녁 메뉴와 영양 정보 표시


Chat Support
챗봇과의 대화 화면
사용자의 문의사항 및 피드백을 입력하는 텍스트 박스


Nutrition Info
영양소 검색 바
영양소 정보 카드



**2. 개발 환경 및 배포**


**2.1 개발 환경**


Frontend: HTML, CSS
Backend: JavaScript
API: ChatGPT API


**2.2 배포 URL**


https://maxkim77.github.io/Diet247/

**3. 프로젝트 설계와 개발 일정 및 R&R**


**3.1 프로젝트 구조**

📦Diet 24.7


 ┣ 📂IMG

 
 ┣ 📜common.css

 
 ┣ 📂HTML

 
 ┣ 📜Home.html
 
 
 ┣ 📜index.html
 
 
 ┣ 📜index.js
 
 
 ┣ 📜section1.html
 
 
 ┣ 📜section2.html
 
 
 ┗ 📜section3.html

**3.2 개발 일정(WBS)**

개발일정 : https://cloud-kale-960.notion.site/24a89e9a89284a12a6756c756be0d5cd?v=be385651648e4a4f92478eb4ee96b23e&pvs=4


**3.3 개인 프로젝트: 총괄 김정원**


**4. UI / BM**

![캡처](https://github.com/maxkim77/Diet247/assets/141907655/532ff12c-0ae5-48dc-bb46-d14ff6683013)

아래 페이지별 상세 설명, Gif 등 첨부 예정.


**5.1 메인 기능**


사용자 정보 입력


식단 자동 생성 및 저장기능


**5.2 추가 기능**


커뮤니티 게시판


건강식품 정보 제공

**5.3 수익화 기능 – 쿠팡파트너스 연동**


**6. 느낀점 및 개선점**
**느낀점**
- ChatGPT API의 활용성이 높아 개발 시간을 단축할 수 있었습니다.
- 사용자의 다양한 요구사항을 충족시키기 위해 계속 업데이트가 필요함을 느꼈습니다.
- 기획을 꼼꼼히 하는 것이 중요하다는 것을 느꼈습니다.


**개선점**
- 자바스크립트 및 CSS 공부 필요
- 챗GPT 의존
- 추후 자바스크립트로 여러 HTML 페이지 구조에서 단일 HTML 페이지로 변환예정
