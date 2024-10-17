import React from 'react';
import styled from 'styled-components';

const Excel = () => {
    const TableContainer = styled.div`
  font-family: Arial, sans-serif;
  border-radius: 8px;
  background-color: white;
  padding: 1rem;
  overflow-x: auto; // 가로 스크롤 추가
`;

const TableTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 16px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  border-radius: 8px;
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
    font-size: 14px;
    @media (max-width: 768px) {
      font-size: 12px;
      padding: 6px;
    }
  }

  th {
    background-color: #f2f2f2;
    font-weight: bold;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tr:hover {
    background-color: #f5f5f5;
  }
`;
  const headers = [
    'NO', '일자', '직업장', '허가번호', '승인부서', '작업내용', 
    '허가작업', '일반작업', '보충작업허가', '위험성평가(JSA)', '비고 (자재/외부)'
  ];

  const generateRandomData = () => {
    return [
      '1',
      '2024.10.11',
      '제조부',
      'P-2024-001',
      '안전관리부',
      '설비 점검',
      '고소작업',
      '일상점검',
      '해당없음',
      '완료',
      '외부업체 참여'
    ];
  };

  const rows = Array(5).fill(null).map(() => generateRandomData());

  return (
    <TableContainer>
      <TableTitle>
        안전작업 허가서 목록표 
        <span style={{ fontSize: '0.8em', color: '#666' }}> 2024.10.11 (금) ~ 2024.10.17 (목) (7일)</span> 
        <span style={{ fontSize: '0.8em', color: 'red' }}> *승인완료 기준</span>
      </TableTitle>
      <StyledTable>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};



export default Excel;   
