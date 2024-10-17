import styled from "styled-components";
import { useLocation } from "react-router-dom";
import {
  Home,
  Users,
  Calendar,
  Settings,
  FileText,
  Briefcase,
  ChevronDown,
  ChevronUp,
  Menu,
  UserRound,
} from "lucide-react";
import { useEffect, useState } from "react";

const SidebarWrapper = styled.div`
  position: fixed;

  justify-content: center;
  padding: 1.5rem;
  width: 300px;
  height: 100%;
  background-color: #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.05);
  font-family: "Noto Sans kr";
  transition: transform 0.3s ease-in-out;

  @media (max-width: 800px) {
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
    width: 100%;
    z-index: 1000;
      top: 60px;
  }

  > div.title {
    font-size: 20px;
    color: #495057;
    padding: 20px 40px 20px 26px;
    font-weight: 500;
  }
`;

const HeaderBar = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0 1rem;
  align-items: center;
  justify-content: space-between;
  z-index: 100;

  @media (max-width: 800px) {
    display: flex;
  }
`;

const CenteredTitle = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 18px;
  font-weight: 600;
`;

const HamburgerButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
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

const DashBoardHeader = styled.div`
  @media (max-width: 800px) {
    pointer-events: none; 
    opacity: 0;
  }
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
      background-color: #ccc; // Changed from black to a lighter color
      border: 1px solid #ccc;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .userName {
    font-size: 14px;
    font-weight: 500;
      @media (max-width: 350px) {
      display: none;
    }
  }

  .userProfile {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: #ccc;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    svg{
        color:white;
        width: 100%;
        height: auto;
        object-fit: cover;
    }
  }
`;

function Sidebar() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(0);
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
      title: "긴급알��� 관리",
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

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {}, [pathname]);

  return (
    <>
      <HeaderBar>
        <HamburgerButton onClick={toggleSidebar}>
          <Menu size={24} />
        </HamburgerButton>
        <CenteredTitle>오늘의 작업장</CenteredTitle>
        <UserInfo>
          <span className="userName">GUEST</span>
          <div className="userProfile">
            <UserRound size={30} />
          </div>
        </UserInfo>
      </HeaderBar>
      <SidebarWrapper isOpen={isOpen}>
        <div className="title">
          오늘의 작업장
          <HamburgerButton onClick={toggleSidebar}>
            {/* <X size={24} /> */}
          </HamburgerButton>
        </div>
        <AccordionContainer>
          {Items.map((props, idx) => {
            const { key, title, icon, content } = props;
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
    </>
  );
}

export default Sidebar;
