import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

const ChartContainer = styled.div`
  width: 100%;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 18px;
  color: #333;
`;

const DateRange = styled.span`
  font-size: 14px;
  color: #666;
`;

const Stats = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-bottom: 20px;
`;

const Stat = styled.div`
  background-color: ${props => props.bgColor};
  color: #fff;
  padding: 10px 15px;
  border-radius: 20px;
  font-size: 14px;
`;

const BarChart = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  height: 300px;  // 300px에서 400px로 증가
`;

const Bar = styled.div`
  width: 40px;
  background-color: #3498db;
  border-radius: 5px 5px 0 0;
  position: relative;
  overflow: hidden;

  &::before, &::after {
    content: '';
    position: absolute;
    width: 100%;
    left: 0;
  }

  &::before {
    height: 33%;
    bottom: 33%;
    background-color: #9b59b6;
  }

  &::after {
    height: 33%;
    bottom: 0;
    background-color: #e74c3c;
  }
`;

const BarChartComponent = () => {
  const chartRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    const bars = chartRef.current.querySelectorAll('.bar');
    gsap.from(bars, {
      height: 0,
      duration: 1,
      ease: 'power2.out',
      stagger: 0.2,
    });
  }, []);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const getBarStyle = (filter) => {
    if (activeFilter === 'all') {
      return { display: 'block', height: '33%' };
    }
    if (activeFilter === filter) {
      return { display: 'block', height: '100%' };
    }
    return { display: 'none' };
  };

  return (
    <ChartContainer>
      <Header>
        <Title>작성된 서류현황</Title>
        <DateRange>2024.10.11 (금) ~ 2024.10.17 (목) (7일)</DateRange>
      </Header>
      <Stats>
        <Stat bgColor="#3498db" onClick={() => handleFilterClick('all')}>전체 0건</Stat>
        <Stat bgColor="#e74c3c">미결재 0건</Stat>
      </Stats>
      <Stats>
        <Stat bgColor="#3498db" >안전작업 허가서</Stat>
        <Stat bgColor="#9b59b6" >작업 위험성 평가</Stat>
        <Stat bgColor="#e74c3c" >안전서약서</Stat>
      </Stats>
      <BarChart ref={chartRef}>
        {[440, 500, 320, 420, 380, 460, 360].map((height, index) => (  // 높이 값 증가
          <Bar 
            key={index} 
            className="bar" 
            style={{ 
              height: activeFilter === 'all' ? `${height}px` : `${height / 3}px`,
              transition: 'height 0.3s ease-in-out'
            }}
          >
            <div style={{ ...getBarStyle('permit'), backgroundColor: '#3498db' }} />
            <div style={{ ...getBarStyle('assessment'), backgroundColor: '#9b59b6' }} />
            <div style={{ ...getBarStyle('pledge'), backgroundColor: '#e74c3c' }} />
          </Bar>
        ))}
      </BarChart>
    </ChartContainer>
  );
};

export default BarChartComponent;
