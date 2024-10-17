import "./App.css";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Sidebar from "./SideBar";
import DashBoard from "./DashBoard";
import NoticeList from "./List";
import NoticeRegister from "./Notice/Register";
import NotificationList from "./Notification/List";
import NotificationRegister from "./Notification/Register";
import ProcessInspectionResult from "./Process/InspectionResult";
import ProcessWorkingReport from "./Process/WorkingReport";
import ProcessWorkingToday from "./Process/WorkingToday";
import WorkerApproval from "./Worker/Approval";
import WorkerAttendance from "./Worker/Attendance";
const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  width: 100%;
`;

const AccordionItem = styled.div`
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 4px;
`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  padding: 15px;
  cursor: pointer;
  background-color: ${(props) => (props.isOpen ? "black" : "")};
  transition: 0.5s ease;
  &:hover {
    background-color: #e9ecef;
  }
`;

const AccordionContent = styled.div`
  padding: 0 15px;
  max-height: ${(props) => (props.isOpen ? "1000px" : "0")};
  overflow: hidden;
  transition: 0.5s ease;
  > ul {
    li {
      display: flex;
      align-items: center;
      overflow: hidden;
      padding: 1rem;
    }
  }
`;

const AccordionIcon = styled.span`
  margin-left: 10px;
`;

const AppContainer = styled.div`
  width: 100%;
  min-height: 200vh;
  background-color: #f3f3f5;
`;

const ContentContainer = styled.main`
  width: 100%;
`;

function App() {
  return (
    <AppContainer>
      <Sidebar></Sidebar>
      <ContentContainer>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/notice/list" element={<NoticeList />} />
          <Route path="/notice/register" element={<NoticeRegister />} />
          <Route path="/notification/list" element={<NotificationList />} />
          <Route
            path="/notification/register"
            element={<NotificationRegister />}
          />
          <Route
            path="/process/inspection-result"
            element={<ProcessInspectionResult />}
          />
          <Route
            path="/process/working-report"
            element={<ProcessWorkingReport />}
          />
          <Route
            path="/process/working-today"
            element={<ProcessWorkingToday />}
          />
          <Route path="/worker/approval" element={<WorkerApproval />} />
          <Route path="/worker/attendance" element={<WorkerAttendance />} />
        </Routes>
    
      </ContentContainer>
    </AppContainer>
  );
}

export default App;
