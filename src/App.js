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



const AppContainer = styled.div`
  width: 100%;
  min-height: 200vh;
  background-color: #f3f3f5;
`;



function App() {
  return (
    <AppContainer>
      <Sidebar></Sidebar>
  
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
    
      
    </AppContainer>
  );
}

export default App;
