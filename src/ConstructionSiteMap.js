import React from 'react';
import styled from 'styled-components';

const MapContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  background-image: url('/image/map.png');
  background-size: cover;
  background-position: center;
  border-radius: 20px;
`;

const Marker = styled.div`
  position: absolute;
  background-color: #4285F4;
  color: white;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 12px;
  cursor: pointer;
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
`;

const ConstructionSiteMap = () => {
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
    <MapContainer>
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
