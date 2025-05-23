
## 🖥️ 프로젝트 개요
- 기간 : 2025.04.25 ~ 2025.05.19
- 이 프로젝트는 TypeScript와 React, 프로그래머스 OPEN API를 사용하여 개발되었습니다.
- de:caffeine: 저희 디카페인은 개발자들이 자신들이 개발일지를 sns처럼 올리는 커뮤니티와 서로 모르는 부분을 질문하여 답글로 답변해주는 2개의 큰 게시판으로 운용하는 것을 목표로 합니다
<br><br><br>

## 🎯 프로젝트 목표
- TypeScript, React, Zustand를 활용하여 효율적이고 확장 가능한 SPA(Single Page Application) 설계 및 구현
- 비동기 통신(Axios, Fetch API)를 활용하여 외부 API(XML → JSON 변환) 데이터를 효율적으로 가져오고 상태 관리
- React Router 를 사용하여 화면 전환 및 상태 관리 최적화
- 사용자 경험(UX)을 고려한 직관적인 UI/UX 설계 및 구현
- Git, Notion, slack 등의 협업 툴을 활용하여 원활한 팀 협업 진행
<br><br><br>

## 👥 팀원 소개 및 역할
<center>
<table>
  <tbody>
    <tr>
    </tr>
    <center>
    <tr>
      <td><a href="https://github.com/manto123123123">이현우</a></td>
      <td><a href="https://github.com/ssujissuji">황수지</a></td> 
      <td><a href="https://github.com/Hayoung0708">강하영</a></td>
      <td><a href="https://github.com/kyoeun01">이교은</a></td>
      <td><a href="https://github.com/dlakrp123">이준수</a></td>
    </tr>
      <tr>
      <td><a>· <br>· </a></td>
      <td><a>· <br>. </a></td>
      <td><a>· <br>·</a></td>
      <td><a>· </a></td>
      <td><a>· </a></td>
    </tr>
  </tbody>
</table>
</center>
<br><br><br>

## ⚙️ 주요 기능
- 메인페이지
  - 전체유저 확인 및 검색
    - 회원가입한 전체 유저 확인 가능 및 채팅메시지 보내기 기능
    - 누가 로그인 중인지 확인 가능
  - 질문게시판,메인게시판 2가지 운영
    - 일상공유, 개발 일지, 취업 정보, 팀원 모집 등 게시판을 나누어 글 작성하는 기능
    - 질문 게시판은 서로 궁금하거나 도움이 필요한 질문을 작성하는 기능
    - 작성한 게시물의 작성시간, 좋아요 수, 댓글을 표시하는 기능
    - 작성한 게시물에 이미지를 첨부하여 추가하는 기능
    - 자신이 작성한 게시물 삭제
  - 마이페이지
    - 내가 작성한 글 및 댓글, 자기소개 작성 기능
  - 채팅모달
    - 자신이 현재 누구와 채팅중인지 목록 확인 가능
    - 유저 선택시 선택한 유저와 채팅할 수 있는 기능

## 🎯 Git Convention

- 🎉 **Start:** Start New Project [:tada]
- ✨ **Feat:** 새로운 기능을 추가 [:sparkles]
- 🐛 **Fix:** 버그 수정 [:bug]
- 🎨 **Design:** CSS 등 사용자 UI 디자인 변경 [:art]
- ♻️ **Refactor:** 코드 리팩토링 [:recycle]
- 🔧 **Settings:** Changing configuration files [:wrench]
- 🗃️ **Comment:** 필요한 주석 추가 및 변경 [:card_file_box]
- ➕ **Dependency/Plugin:** Add a dependency/plugin [:heavy_plus_sign]
- 📝 **Docs:** 문서 수정 [:memo]
- 🔀 **Merge:** Merge branches [:twisted_rightwards_arrows:]
- 🚀 **Deploy:** Deploying stuff [:rocket]
- 🚚 **Rename:** 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우 [:truck]
- 🔥 **Remove:** 파일을 삭제하는 작업만 수행한 경우 [:fire]
- ⏪️ **Revert:** 전 버전으로 롤백 [:rewind]

## 🪴 Branch Convention (GitHub Flow)

- `main`: 배포 가능한 브랜치, 항상 배포 가능한 상태를 유지
- `feature/{description}`: 새로운 기능을 개발하는 브랜치
  - 예: `feature/add-login-page`

### Flow

1. `main` 브랜치에서 새로운 브랜치를 생성.
2. 작업을 완료하고 커밋 메시지에 맞게 커밋.
3. Pull Request를 생성 / 팀원들의 리뷰.
4. 리뷰가 완료되면 `main` 브랜치로 병합.
5. 병합 후, 필요시 배포.

**예시**:

```bash
# 새로운 기능 개발
git checkout -b feature/add-login-page

# 작업 완료 후, main 브랜치로 병합
git checkout main
git pull origin main
git merge feature/add-login-page
git push origin main
```
  
## 🛠️ 기술 스택
![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![type](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![wind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
<br><br><br>
## 🚀  협업 툴
![git](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)
![notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white)
![slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)


