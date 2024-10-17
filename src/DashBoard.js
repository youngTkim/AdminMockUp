import { useState } from "react";
import styled from "styled-components";
import { ChevronDown, Printer } from "lucide-react";
import DateRangePicker from "./DateRangePicker";
import CustomDropdown from "./DropDown";

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
    </DashBoardWrapper>
  );
}

export default DashBoard;
