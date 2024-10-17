import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import { Calendar } from "lucide-react";

const DatePickerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 350px) {å
    flex-direction: column;
    align-items: stretch;
    > div{
      display: flex;
    width: 100%;
    } 
  }
`;

const DatePickerWrapper = styled.div`
  position: relative;
`;

const StyledDatePicker = styled(DatePicker)`
  padding: 8px 30px 8px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  width: 120px;

  @media (max-width: 350px) {
    width: 100%;
  }
`;

const CalendarIcon = styled(Calendar)`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`;

const Separator = styled.span`
  font-size: 18px;
  font-weight: bold;

  @media (max-width: 350px) {
    align-self: center;
    margin: 5px 0;
  }
`;

const DateRangePicker = ({ calenderType }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    const currentDate = new Date();
    if (calenderType === "일별") {
      setStartDate(currentDate);
      setEndDate(new Date());
    } else if (calenderType === "주별") {
      const sevenDaysAgo = currentDate;
      sevenDaysAgo.setDate(currentDate.getDate() - 7);
      setStartDate(sevenDaysAgo);
      setEndDate(new Date());
    } else if (calenderType === "월별") {
      const thirtyDaysAgo = currentDate;
      thirtyDaysAgo.setDate(currentDate.getDate() - 30);
      setStartDate(thirtyDaysAgo);
      setEndDate(new Date());
    }
  }, [calenderType]);

  return (
    <DatePickerContainer>
      <DatePickerWrapper>
        <StyledDatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          dateFormat="yyyy/MM/dd"
        />
        <CalendarIcon size={18} />
      </DatePickerWrapper>
      <Separator>~</Separator>
      <DatePickerWrapper>
        <StyledDatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          dateFormat="yyyy/MM/dd"
        />
        <CalendarIcon size={18} />
      </DatePickerWrapper>
    </DatePickerContainer>
  );
};

export default DateRangePicker;
