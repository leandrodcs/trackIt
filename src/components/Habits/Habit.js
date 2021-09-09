import styled from "styled-components";
import { BsTrash } from 'react-icons/bs';
import Day from "./Day";


export default function Habit() {

  const days = ["D","S","T","Q","Q","S","S",];

  return (
    <HabitStyle>
      <p>Ler 1 capítulo de livro</p>
      <DaysList>
      {days.map(day =><Day day={day}/>)}
      </DaysList>
      <BsTrash />
    </HabitStyle>
  );
}

const HabitStyle = styled.div`
  height: 91px;
  width: 100%;
  background: #FFFFFF;
  border-radius: 5px;
  position: relative;
  padding: 13px 15px;
  color: #666666;

  svg {
    position: absolute;
    top: 10px;
    right: 10px;
    color: #666666;
  }
`;

const DaysList = styled.ul`
  display: flex;
  gap: 4px;
  margin-top: 10px;

`;