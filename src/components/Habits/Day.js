import styled from "styled-components";

export default function Day({weekDay, addDay, dayNumber, habitDays, includeDay, load}) {

  if(addDay) {

    function selectDay() {
      if(!habitDays.includes(dayNumber)) {
        includeDay(dayNumber, true);
      }
      if(habitDays.includes(dayNumber)) {
        includeDay(dayNumber, false);
      }
    }
    return (
      <WeekDay selected={habitDays.includes(dayNumber)} load={load} onClick={selectDay}>{weekDay}</WeekDay>
    );
  }
  else {
    return (
      <WeekDay selected={habitDays.includes(dayNumber) ? true : false}>{weekDay}</WeekDay>
    );
  }
}

const WeekDay = styled.li`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #D5D5D5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.selected ? `#FFFFFF` : `#DBDBDB`};
  font-size: 20px;
  background: ${props => props.selected ? `#CFCFCF` : `#FFFFFF`};
  pointer-events: ${props => props.load ? `none` : `initial`};
`; 