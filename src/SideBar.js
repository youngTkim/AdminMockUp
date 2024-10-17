import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Home,
  Users,
  Calendar,
  Settings,
  FileText,
  Briefcase,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useEffect, useState } from "react";

const SidebarWrapper = styled.div`
  position: fixed;
  justify-content: center;
  padding: 1.5rem;
  width: 300px;
  height: 100vh;
  background-color: #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.05);
  font-family: "Noto Sans kr";

  > div.title {
    font-size: 20px;
    color: #495057;
    padding: 20px 40px 20px 26px;
    font-weight: 500;
  }
`;

const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  width: 100%;
`;

const AccordionItem = styled.div`
  margin-bottom: 4px;
`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  font-size: 14px;
  padding: 15px;
  cursor: pointer;
  color: ${(props) => (props.isOpen ? "#3988ff" : "")};
  font-weight: ${(props) => (props.isOpen ? 600 : 500)};
  background-color: ${(props) => (props.isOpen ? "#e1edff" : "")};
  transition: 0.3s ease;
  > .name {
    display: flex;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
`;

const AccordionContent = styled.div`
  padding: 0 15px;
  max-height: ${(props) => (props.isOpen ? "1000px" : "0")};
  overflow: hidden;
  font-size: 14px;
  transition: 0.3s ease;
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

function Sidebar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const Items = [
    {
      title: "대시보드",
      index: 0,
      icon: <Home size={18} />,
      content: null,
    },
    {
      title: "공지사항 관리",
      index: "1",
      icon: <Users size={18} />,
      content: [
        {
          path: "/notice/list",
          name: "공지사항 목록",
        },
        {
          path: "/notice/register",
          name: "공지사항 등록",
        },
      ],
    },
    {
      title: "공정 관리",
      index: "2",
      icon: <Calendar size={18} />,
      content: [
        {
          path: "/process/working-today",
          name: "오늘의 작업",
        },
        {
          path: "/process/working-report",
          name: "작업 보고",
        },
        {
          path: "/process/inspection-result",
          name: "현장 서류",
        },
      ],
    },
    {
      title: "작업유형 관리",
      index: "3",
      icon: <FileText size={18} />,
      content: [
        {
          path: "/company/worktype-list",
          name: "작업유형 목록",
        },
        {
          path: "/process/working-report",
          name: "작업유형 등록",
        },
      ],
    },
    {
      title: "회원 관리",
      index: "4",
      icon: <Briefcase size={18} />,
      content: [
        {
          path: "/worker/approval",
          name: "회원 현황",
        },
        {
          path: "/worker/attendance",
          name: "출/퇴근 현황",
        },
      ],
    },
    {
      title: "긴급알림 관리",
      index: "5",
      icon: <Settings size={18} />,
      content: [
        {
          path: "/notification/list",
          name: "긴급알림 목록",
        },
        {
          path: "/notification/register",
          name: "긴급알림 등록",
        },
      ],
    },
  ];
  const [openIndex, setOpenIndex] = useState(0);
  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  useEffect(() => {}, [pathname]);

  return (
    <SidebarWrapper>
      <div className="title">오늘의 작업장</div>
      <AccordionContainer>
        {Items.map((props, idx) => {
          const { key, title, index, icon, content } = props;
          return (
            <AccordionItem key={key}>
              <AccordionHeader
                isOpen={openIndex === idx}
                onClick={() => toggleAccordion(idx)}
              >
                <div className="name">
                  {icon}
                  <span>{title}</span>
                </div>
                {content && (
                  <AccordionIcon>
                    {openIndex === idx ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={13} />
                    )}
                  </AccordionIcon>
                )}
              </AccordionHeader>
              {content && (
                <AccordionContent isOpen={openIndex === idx}>
                  <ul>
                    {content.map((contentInfo) => {
                      return <li key={contentInfo.path}>{contentInfo.name}</li>;
                    })}
                  </ul>
                </AccordionContent>
              )}
            </AccordionItem>
          );
        })}
      </AccordionContainer>
    </SidebarWrapper>
  );
}

export default Sidebar;
