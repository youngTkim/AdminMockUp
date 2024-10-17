import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { motion } from 'framer-motion';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const DashboardWrapper = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #343a40;
  margin-bottom: 20px;
  font-size: clamp(1.5rem, 4vw, 2rem);
`;

const DateRange = styled.div`
  font-size: clamp(0.8rem, 2vw, 1rem);
  color: #6c757d;
  margin-bottom: 20px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const GridItem = styled(motion.div)`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const ItemTitle = styled.h3`
  font-size: clamp(0.9rem, 2.5vw, 1.2rem);
  color: #495057;
  margin-bottom: 15px;
`;

const ChartContainer = styled.div`
  height: 200px;
  width: 100%;
`;

const SafetyWorkPermitDashboard = () => {
  const [chartDimensions, setChartDimensions] = useState({ width: 0, height: 0 });
  const chartRef = useRef(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (chartRef.current) {
        setChartDimensions({
          width: chartRef.current.offsetWidth,
          height: chartRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const barChartData = {
    labels: ['일반', '화기', '밀폐'],
    datasets: [
      {
        label: '허가서 건수',
        data: [12, 19, 3],
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const doughnutData = {
    labels: ['완료', '진행 중', '대기'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
        hoverBackgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 12,
          font: {
            size: 10
          }
        }
      }
    }
  };

  return (
    <DashboardWrapper>
      <Title>안전작업 허가서 통계</Title>
      <DateRange>2024.10.11 (금) - 2024.10.17 (목) (7일)</DateRange>
      <GridContainer>
        <GridItem
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ItemTitle>서류 구분 (일반/화기)</ItemTitle>
          <ChartContainer ref={chartRef}>
            <Bar data={barChartData} options={chartOptions} width={chartDimensions.width} height={chartDimensions.height} />
          </ChartContainer>
        </GridItem>
        <GridItem
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ItemTitle>작업 구분 (외주/자체)</ItemTitle>
          <ChartContainer>
            <Doughnut data={doughnutData} options={chartOptions} />
          </ChartContainer>
        </GridItem>
        <GridItem
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <ItemTitle>안전작업 상세 (작성된 개수)</ItemTitle>
          <ChartContainer>
            <Bar data={barChartData} options={chartOptions} />
          </ChartContainer>
        </GridItem>
      </GridContainer>
    </DashboardWrapper>
  );
};

export default SafetyWorkPermitDashboard;
