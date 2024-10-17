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
  justify-content: space-between;
  align-items: flex-end;
  height: 200px;
  width: 100%;
  padding-bottom: 10px;

  @media (max-width: 1000px) {
    justify-content: space-around;
  }
`;

const Bar = styled.div`
  width: 40px;
  background-color: #3498db;
  border-radius: 8px 8px 0 0;
  position: relative;
  transition: width 0.3s ease-in-out, height 0.3s ease-in-out;
  overflow: hidden;

  @media (max-width: 1000px) {
    width: 30px;
  }

  @media (max-width: 900px) {
    width: 25px;
  }

  @media (max-width: 800px) {
    width: 20px;
    border-radius: 6px 6px 0 0;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.1);
    border-radius: inherit;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    left: 0;
    height: 33%;
    bottom: 0;
    background-color: #e74c3c;
  }
`;

const BarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 1;
  width: calc(100% / 7); // 7개의 막대가 있다고 가정

  @media (max-width: 1000px) {
    width: calc(100% / 7 - 10px);
  }
`;

const BarDate = styled.div`
  margin-top: 5px;
  font-size: 12px;
  text-align: center;

  @media (max-width: 900px) {
    font-size: 10px;
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

  const maxBarHeight = 180; // 최대 막대 높이 설정 (px)
  const barValues = [80, 140, 160, 260, 220, 300, 200];
  const maxValue = Math.max(...barValues);

  const getScaledHeight = (value) => {
    return (value / maxValue) * maxBarHeight;
  };

  const getLastSevenDays = () => {
    const dates = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const year = date.getFullYear().toString().slice(-2); // 년도의 마지막 두 자리
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      dates.push(`${year}.${month}.${day}`);
    }
    return dates;
  };

  const dates = getLastSevenDays();

  return (
    <ChartContainer>
      <Header>
        <Title>작성된 서류현황</Title>
        <DateRange>{`${dates[0]} ~ ${dates[6]} (7일)`}</DateRange>
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
        {barValues.map((value, index) => (
          <BarContainer key={index}>
            <Bar 
              className="bar" 
              style={{ 
                height: activeFilter === 'all' 
                  ? `${getScaledHeight(value)}px` 
                  : `${getScaledHeight(value) / 3}px`,
                transition: 'height 0.3s ease-in-out, width 0.3s ease-in-out',
                borderRadius: '8px 8px 0 0',
              }}
            >
              <div style={{ ...getBarStyle('permit'), backgroundColor: '#3498db' }} />
              <div style={{ ...getBarStyle('assessment'), backgroundColor: '#9b59b6' }} />
              <div style={{ ...getBarStyle('pledge'), backgroundColor: '#e74c3c' }} />
            </Bar>
            <BarDate>{dates[index]}</BarDate>
          </BarContainer>
        ))}
      </BarChart>
    </ChartContainer>
  );
};

export default BarChartComponent;
