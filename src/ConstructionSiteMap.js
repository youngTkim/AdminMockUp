import React from 'react';
import styled from 'styled-components';

const MapContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%; // 부모 요소의 높이에 맞춤
  background-image: url('/image/map.png');
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  overflow: hidden; // 내용이 넘치는 경우 숨김

  @media (max-width: 700px) {
    aspect-ratio: 16 / 9; // 16:9 비율 유지
  }

  @media (max-width: 300px) {
    display: none; // 300px 이하에서 숨김
  }
`;

const Marker = styled.div`
  position: absolute;
  background-color: #4285F4;
  color: white;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 12px;
  cursor: pointer;
  transform: translate(-50%, -50%);

  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #4285F4;
    transform: translateX(-50%);
  }

  @media (max-width: 700px) {
    font-size: 10px;
    padding: 3px 6px;
    
    &:after {
      border-left-width: 3px;
      border-right-width: 3px;
      border-top-width: 3px;
      bottom: -3px;
    }
  }
`;

const ConstructionSiteMap = ({ className }) => {
  // 작업장 데이터 (예시)
  const workplaces = [
    { name: 'CPM1', left: '30%', top: '40%', documents: 3 },
    { name: 'RMP1', left: '50%', top: '60%', documents: 0 },
    { name: 'CPM2', left: '70%', top: '30%', documents: 2 },
    { name: 'RMP2', left: '40%', top: '70%', documents: 4 },
    { name: '기타', left: '60%', top: '80%', documents: 0 },
    // 추가 작업장 데이터...
  ];

  return (
    <MapContainer className={className}>
      {workplaces.map((workplace, index) => (
        <Marker
          key={index}
          style={{ left: workplace.left, top: workplace.top }}
        >
          {workplace.name}<br/>
          서류 {workplace.documents}건
        </Marker>
      ))}
    </MapContainer>
  );
};

export default ConstructionSiteMap;
