import styled from "styled-components";
import { useState } from "react";
import axios from "axios";


export default function Day({weekDay, addDay, index, habitDays}) {

  const [selected, setSelected] = useState(false);

  if(addDay) {
    return (
      <WeekDay selected={selected} onClick={() => selected ? setSelected(false) : setSelected(true)}>{weekDay}</WeekDay>
    );
  }
  else {
    return (
      <WeekDay selected={habitDays.includes(index) ? true : false}>{weekDay}</WeekDay>
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
`; 