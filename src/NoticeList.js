import React, { useState } from 'react';
import styled from 'styled-components';

const ListContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
`;

const NoticeItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }
`;

const NoticeTitle = styled.span`
  font-size: 14px;
  margin-bottom: 5px;
`;

const NoticeDate = styled.span`
  font-size: 12px;
  color: #888;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  max-height: 80vh;
  overflow-y: auto;
  
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const ModalCategory = styled.div`
  color: #4a90e2;
  font-size: 14px;
  margin-bottom: 10px;
`;

const ModalTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ModalDate = styled.p`
  color: #888;
  font-size: 14px;
  margin-bottom: 20px;
`;

const ModalBody = styled.div`
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 20px;
  white-space: pre-wrap;
  word-wrap: break-word;
  height: 300px;
  overflow-y: auto;
`;

const ModalImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

const ConfirmButton = styled.button`
  background-color: #4a90e2;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
`;

const NoticeList = ({ notices }) => {
  const [selectedNotice, setSelectedNotice] = useState(null);

  const openModal = (notice) => {
    setSelectedNotice(notice);
  };

  const closeModal = () => {
    setSelectedNotice(null);
  };

  return (
    <ListContainer>
      <Title>공지사항 더보기</Title>
      {notices.map((notice) => (
        <NoticeItem key={notice.id} onClick={() => openModal(notice)}>
          <NoticeTitle>{notice.title}</NoticeTitle>
          <NoticeDate>{notice.date}</NoticeDate>
        </NoticeItem>
      ))}

      {selectedNotice && (
        <Modal onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>×</CloseButton>
            <ModalCategory>[업데이트]</ModalCategory>
            <ModalTitle>{selectedNotice.title}</ModalTitle>
            <ModalDate><strong> 오늘의작업장(인사/업무담당자)</strong> {selectedNotice.date}</ModalDate>
            <ModalBody dangerouslySetInnerHTML={{ __html: selectedNotice.content }} />
            {selectedNotice.img && <ModalImage src={selectedNotice.img} alt="공지사항 이미지" />}
            <ConfirmButton onClick={closeModal}>확인</ConfirmButton>
          </ModalContent>
        </Modal>
      )}
    </ListContainer>
  );
};

export default NoticeList;
