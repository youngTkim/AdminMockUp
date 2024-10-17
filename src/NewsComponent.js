import React from 'react';
import styled from 'styled-components';

const NewsComponent = () => {
  const NewsWrapper = styled.div`
    padding: 1rem;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    overflow-y: auto;
    min-width: 200px;
    
    @media (min-width: 768px) {
      padding: 1rem 2rem;
    }

    h2 {
      font-size: 1.2rem;
      margin-bottom: 1rem;
      color: #333;

      @media (min-width: 768px) {
        font-size: 1.5rem;
      }
    }
  `;

  const NewsButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;

    button {
      padding: 0.5rem 1rem;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
      font-size: 0.9rem;

      @media (min-width: 768px) {
        font-size: 1rem;
      }

      &:hover {
        background-color: #0056b3;
      }
    }
  `;

  const NewsList = styled.ul`
    list-style-type: none;
    padding: 0;
    max-height: 30vh;
    overflow-y: auto;

    li {
      margin-bottom: 1rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid #e9ecef;

      &:last-child {
        border-bottom: none;
      }

      h3 {
        font-size: 1rem;
        margin-bottom: 0.5rem;
        color: #495057;

        @media (min-width: 768px) {
          font-size: 1.1rem;
        }
      }

      p {
        font-size: 0.8rem;
        color: #6c757d;

        @media (min-width: 768px) {
          font-size: 0.9rem;
        }
      }
    }
  `;

  const news = [
    {
      title: '[씨름ㆍ씨름]조용한 인터 경건도희장 인도신념 연극식도에 너무 험을 ...',
      date: '2024-10-17'
    },
    {
      title: '충북도청 국정감사 …여야 오송참사에 다른 시각',
      date: '2024-10-17'
    },
    {
      title: '[김경식의 이세계 ESG]대·눈·타가 세상을 바꾼다',
      date: '2024-10-17'
    },
    {
      title: '충북경찰청 국감서 공직기강·부실 수사 집중 질타',
      date: '2024-10-17'
    },
    {
      title: '[기획- 재난 최전선 도민안전본부] (하) 재난안전 패러다임의 전환',
      date: '2024-10-17'
    },
    {
      title: '[단독] 산재보험기금 627억, 중대재해 상습기업에 투자됐다',
      date: '2024-10-17'
    }
  ];

  return (
    <NewsWrapper>
      <h2>관련 뉴스 2024-10-17 22:22</h2>
      <NewsButtons>
        <button>중대재해처벌법</button>
        <button>산업재해</button>
        <button>안전</button>
        <button>위험성평가</button>
      </NewsButtons>
      <NewsList>
        {news.map((item, index) => (
          <li key={index}>
            <h3>{item.title}</h3>
            <p>{item.date}</p>
          </li>
        ))}
      </NewsList>
    </NewsWrapper>
  );
};

export default NewsComponent;
