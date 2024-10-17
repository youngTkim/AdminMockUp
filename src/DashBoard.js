import { useState } from "react";
import styled from "styled-components";
import { ChevronDown, Printer } from "lucide-react";
import DateRangePicker from "./DateRangePicker";
import CustomDropdown from "./DropDown";
import WeatherComponent from "./Wheather";
import NoticeList from "./NoticeList";
import NewsComponent from "./NewsComponent";
import Excel from "./Excel";
const DashBoardWrapper = styled.div`
  padding: 0rem 2rem 0rem 2rem;
  margin-left: 300px;
  > div {
    margin-bottom: 1rem;
  }
`;

const DashBoardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  > .title {
    font-size: 1.5rem;
    font-weight: 600;
  }
  > .userInfo {
    display: flex;
    align-items: center;
    > .position {
      margin-right: 0.5rem;
    }

    > .profile {
      width: 3rem;
      height: 3rem;
      background-color: black;
      border: 1px solid black;
      border-radius: 50%;
      overflow: hidden;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: auto;
        object-fit: cover;
      }
    }
  }
`;

const DashBoardSetter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;
  min-height: 5rem;
  padding: 1rem 1.5rem;
  border-radius: 0.8rem;
  background-color: #f8f8fb;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.05);
  > .subtitle {
    font-size: 1.1rem;
    font-weight: 800;
  }
  > .location {
    display: flex;
    padding: 0.8rem;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    background-color: rgba(0, 0, 0, 0.1);
    flex-grow: 1;
    border-radius: 0.8rem;
  }
  .setter_button {
    display: flex;
    align-items: center;
    font-weight: 500;
    border-radius: 4px;
    min-height: 2.4rem;
    background-color: white;
    border: 1px solid #ced4da;
    color: #7a7f84;
    font-family: "Noto Sans kr";
    font-size: 14px;
    padding: 7.52px 12px;
    text-align: center;
  }

  .activated {
    color: #3988ff;
    border: 1px solid #3988ff;
  }

  .look_up {
    background-color: #3988ff;
    border: 1px solid #3988ff;
    color: white;
  }
  .print {
  }
`;

const DashBoardAssessment = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  justify-content: space-between;

  > article {
    display: flex;
    flex-direction: column;
    padding: 15px;
    flex: 1;
    min-height: 7rem;
    height: 100%;
    background-color: #ffffff;
    border-radius: 15px;
    font-family: "Noto Sans kr";
    font-size: 18px;
    font-weight: 700;
    > div {
      flex: 1;
      display: flex;
      align-items: center;
      gap: 5px;
      > span:first-of-type {
        display: flex;
        align-items: center;
        padding: 0.5rem;
        font-size: 1rem;
        border-radius: 0.5rem;
        height: 2rem;
      }
      > span:nth-of-type(2) {
        color: #434343;
      }
      > span:nth-of-type(3) {
        color: #aaa;
      }
    }
    .normal {
      color: #3988ff;
      background-color: #e8f4ff;
    }
    .firearm {
      color: #ff7272;
      background-color: #ffe8e8;
    }
    .pledge {
      color: #00b33f;
      background-color: #e8ffea;
    }
  }
`;

const notices = [
  { 
    id: 1, 
    title: '10.16 오늘의작업장 앱 업데이트 사전 안내 (필수)', 
    date: '2024-10-14', 
    content: `안녕하세요, 오늘의작업장입니다.

신규 기능 추가에 따른
업데이트가 진행되었음을 안내 드립니다.

원활한 서비스 사용을 위해
APP 업데이트를 진행해 주세요!

[업데이트 내용]
1. 회원가입 시, (하청)업체명/부서/직책 필수값 설정
2. 공지사항 필터 변경
- 기존 :  #공지사항 #일반 #작업
- 변경 후 : #전체 #일반 #업데이트
3. 한국화학연구원 커스터마이징 작업 진행
4. 에코프로머티리얼즈 커스터마이징 작업 진행

*업데이트 일자: 2024년 10월 16일 수요일

감사합니다.`,
img: 'https://storage.todayworkings.com/notice/a431068a75344edc953f58357174aa6e.png'

},
  { 
    id: 2, 
    title: '09.30 오늘의작업장 앱 업데이트 사전 안내 (필수)', 
    date: '2024-10-02 17:36', 
    content: `안녕하세요, 오늘의작업장입니다.

신규 기능 추가에 따른
업데이트가 진행되었음을 안내드립니다.

원활한 서비스 사용을 위해
앱 업데이트를 진행해 주세요!

[업데이트 내용]
- 업체에 따른 가입 프로세스 업데이트
- 허가서 보충작업 개별 확인자 서명 추가
- 허가서 외주작업 시, 발급자 서명 요건 추가 : 승인자 선택
- 안전서약서 이미지 및 버튼 확대
- 지시사항 ‘필독' 칩 추가
- 글자 크기 확대 시 반응형 추가
- 기타 오류 수정

*업데이트 일자: 2024년 09월 30일 (ver. 1.9.14)

감사합니다.`,
img: 'https://storage.todayworkings.com/notice/f55d868e20194776995f4591f146647c.png'

},
  { 
    id: 3, 
    title: '오늘의작업장 회사 및 플랫폼 소개서', 
    date: '2024-09-06 16:44', 
    content: `안녕하세요. 데이터 기반 현장 서류관리 플랫폼 (주)오늘의작업장입니다.

회사 소개 및 플랫폼 소개 및 계약 절차에 대한 자료 공유 드립니다.
궁금한 사항이 있으시면 언제든 연락 주세요.

[고객센터]
010-8227-8845

`,
img: 'https://storage.todayworkings.com/notice/f55d868e20194776995f4591f146647c.png'

},
  { 
    id: 4, 
    title: '08.30 오늘의작업장 앱 업데이트 사전 안내 (필수)', 
    date: '2024-09-06 16:41', 
    content: `안녕하세요, 오늘의작업장입니다.
신규 기능 추가에 따른 업데이트가 진행되었음을 안내 드립니다.

원활한 서비스 사용을 위해
앱 업데이트를 진행해 주세요!

[업데이트 내용]
- 이전 서류 복제 기능 추가

*업데이트 일자: 2024년 08월 30일 (ver. 1.8.9)

감사합니다.
`,
img: 'https://storage.todayworkings.com/notice/f55d868e20194776995f4591f146647c.png'

},
  { 
    id: 4, 
    title: 'WEB 관리자페이지 캐시 삭제 안내문', 
    date: '2024-05-29 03:34', 
    content: `안녕하세요! (주)오늘의작업장입니다!

저희가 5월 20일(월)에 더 나은 서비스를 위해 서버를 업그레이드했습니다.

기존 관리자페이지 접속하셨던 회원분들께서는, 사용에 어려움이 발생하니

꼭 캐시삭제를 진행 후 접속해주시길 바랍니다~


[캐시삭제 방법 알아보러가기]
https://www.todayworkings.kr/forum/view/1046684
`,
img: 'https://storage.todayworkings.com/notice/a6488dbf6ecb402eaa940a18cc97ccc6.png'

},
 

];

const SideBySideContainer = styled.div`
  display: flex;
  flex-direction: column; // 기본적으로 세로 방향으로 배치
  gap: 2rem;
  height: auto;

  > * {
    width: 100%; // 각 자식 요소의 너비를 100%로 설정
  }

  @media (min-width: 701px) {
    flex-direction: row; // 501px 이상에서는 가로 방향으로 배치
    height: 400px;
    > * {
      width: 0; // 너비를 0으로 설정하여 flex-grow가 제대로 작동하도록 함
      flex: 1;
    }
  }
`;

function DashBoard() {
  const [curLocation, setCurLocation] = useState("전체");
  const [calenderType, setCalenderType] = useState("일별");
  const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];

  return (
    <DashBoardWrapper>
      <DashBoardHeader>
        <span className="title">오늘의 작업장 대시보드</span>
        <div className="userInfo">
          <label className="position">GUEST(인사/업무담당자)</label>
          <span className="profile"></span>
        </div>
      </DashBoardHeader>
      <DashBoardSetter>
        <div className="subtitle">상세조회</div>
        <div className="location">
          <span>{curLocation}</span>
          <ChevronDown size={18} />
        </div>
        <DateRangePicker calenderType={calenderType} />
        <div
          className={`setter_button ${calenderType === "일별" && "activated"}`}
          onClick={() => {
            setCalenderType("일별");
          }}
        >
          일별
        </div>
        <div
          className={`setter_button ${calenderType === "주별" && "activated"}`}
          onClick={() => {
            setCalenderType("주별");
          }}
        >
          주별
        </div>
        <div
          className={`setter_button ${calenderType === "월별" && "activated"}`}
          onClick={() => {
            setCalenderType("월별");
          }}
        >
          월별
        </div>
        <div className="setter_button look_up">조회</div>
        <div className="setter_button print">
          <span>출력</span>
          <Printer size={14} />
        </div>
      </DashBoardSetter>
      <DashBoardAssessment>
        <article>
          <div>
            <span className="normal">일반</span>
            <span>안전작업허가서</span>
            <span>(위험성평가)</span>
          </div>
          <div>0건</div>
        </article>
        <article>
          <div>
            <span className="firearm">화기</span>
            <span>안전작업허가서</span>
            <span>(위험성평가)</span>
          </div>
          <div>0건</div>
        </article>
        <article>
          <div>
            <span className="pledge">공통</span>
            <span>안전서약서</span>
          </div>
          <div>0건</div>
        </article>
      </DashBoardAssessment>
      <CustomDropdown options={options} defaultOption="Select" />
      <Excel />
      <SideBySideContainer>
        <NoticeList notices={notices} />
        <NewsComponent />
      </SideBySideContainer>
      <WeatherComponent temperature={20} humidity={60} minTemp={15} maxTemp={25} precipitation={30} windSpeed={5} />
    </DashBoardWrapper>
  );
}

export default DashBoard;
