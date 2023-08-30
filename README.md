# Diet24/7
**Diet 24/7: 개인화된 다이어트 식단 웹 플랫폼 기획안**

**1. 목표와 기능**


**1.1 목표**


Diet 24/7은 사용자의 식단 선호, 영양 필요성, 목표 체중 등을 고려하여 맞춤형 식단을 자동으로 생성하는 웹 플랫폼입니다. 

이 서비스의 목적은 다음과 같습니다:

개인화된 식단 제공: 각 사용자의 몸 상태와 목표에 맞는 식단을 제공합니다.


영양 균형: 영양소의 균형을 맞춘 식단을 제공하여 건강을 유지합니다.


사용자 편의성: 실시간 챗봇 상담을 통해 사용자의 불편 사항을 해결합니다.


데이터 기반 의사결정: 사용자의 식단과 피드백을 데이터로 수집하여 지속적으로 서비스를 개선합니다.

**1.2 요구 기능사항**




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



**2. 개발 환경 및 배포 URL**


**2.1 개발 환경**


Frontend: HTML, CSS
Backend: JavaScript
API: ChatGPT API


**2.2 배포 URL**


https://maxkim77.github.io/Diet247/

**3. 프로젝트 구조와 개발 일정**


**3.1 프로젝트 구조**


HTML


CSS


JS


└─ src


    │  index.js

    
    │  App.js

    
├─ api


│  │  chatAPI.js


**3.2 개발 일정(WBS)**

개발일정 : https://cloud-kale-960.notion.site/24a89e9a89284a12a6756c756be0d5cd?v=be385651648e4a4f92478eb4ee96b23e&pvs=4


**4. 개인 프로젝트: 총괄 김정원**


**5. UI / BM**


아래 페이지별 상세 설명, Gif 등 첨부 예정.


**6. 데이터베이스 모델링(ERD)**
User Table: id, username, weight, target_weight, allergies
Diet Table: id, user_id, date, meals
Chat Table: id, user_id, timestamp, message


**7. 메인 기능**
사용자 프로필 생성 및 수정
식단 자동 생성 및 수정
실시간 챗봇 상담


**8. 추가 기능**
커뮤니티 게시판
건강식품 제공


**9. 수익화 기능 – 쿠팡파트너스 연동**


**10. 개발하며 느낀점**
ChatGPT API의 활용성이 높아 개발 시간을 단축할 수 있었습니다.
사용자의 다양한 요구사항을 충족시키기 위해 계속 업데이트가 필요함을 느꼈습니다.
기획을 꼼꼼히 하는 것이 중요하다는 것을 느꼈습니다.
