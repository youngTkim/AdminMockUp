import React from 'react';

const NewsComponent = () => {
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
    <div className="news-component">
      <h2>관련 뉴스 2024-10-17 22:22</h2>
      <div className="news-buttons">
        <button>중대재해처벌법</button>
        <button>산업재해</button>
        <button>안전</button>
        <button>위험성평가</button>
      </div>
      <ul className="news-list">
        {news.map((item, index) => (
          <li key={index}>
            <h3>{item.title}</h3>
            <p>{item.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsComponent;