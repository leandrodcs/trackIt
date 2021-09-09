import styled from "styled-components";

export default function Day({day}) {
  return (
    <WeekDay>{day}</WeekDay>
  );
}

const WeekDay = styled.li`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #D5D5D5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #DBDBDB;
  font-size: 20px;
  background: #FFFFFF;
`; 