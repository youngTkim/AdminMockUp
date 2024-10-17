import React from 'react';
import styled from 'styled-components';

const WeatherContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 20px auto;

  @media (max-width: 768px) {
    padding: 12px;
  }
`;

const Title = styled.h2`
  font-size: 18px;
  color: #333;
  margin-bottom: 16px;
`;

const WeatherInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  border-top: 1px solid #ccc;
  padding-top: 16px;
  padding-bottom: 16px;
`;

const MainWeather = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  margin-right: 16px;
  border-right: 1px solid #ccc;

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const WeatherIcon = styled.span`
  
  font-size: 48px;
  margin-right: 8px;

  @media (max-width: 480px) {
    font-size: 36px;
  }
`;

const AdditionalInfo = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 14px;
  color: #666;

  @media (max-width: 480px) {
    width: 100%;
    margin-top: 12px;
  }
`;

const InfoItem = styled.span`
  &:not(:last-child)::after {
    content: '|';
    margin: 0 8px;
    color: #ccc;
  }
`;

const WeatherComponent = ({ temperature, humidity, minTemp, maxTemp, precipitation, windSpeed }) => {
  return (
    <WeatherContainer>
      <Title>날씨 <span style={{ fontSize: '0.8em', color: '#888' }}>날씨정보 받아오는 중...</span></Title>
      <WeatherInfo>
        <MainWeather>
          <WeatherIcon>☀️</WeatherIcon>
          {temperature}-°C
        </MainWeather>
        <AdditionalInfo>
          <InfoItem><span style={{ color: '#ccc' }}>습도</span> {humidity}%</InfoItem>
          <InfoItem style={{ color: 'blue' }}><span style={{ color: '#ccc' }}>최저</span> {minTemp}°C</InfoItem>
          <InfoItem style={{ color: 'red' }}><span style={{ color: '#ccc' }}>최고</span> {maxTemp}°C</InfoItem>
          <InfoItem><span style={{ color: '#ccc' }}>강수</span> {precipitation}%</InfoItem>
          <InfoItem><span style={{ color: '#ccc' }}>풍속</span> {windSpeed}m/s</InfoItem>
        </AdditionalInfo>
      </WeatherInfo>
    </WeatherContainer>
  );
};

export default WeatherComponent;