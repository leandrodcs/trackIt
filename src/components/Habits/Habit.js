import styled from "styled-components";
import { BsTrash } from 'react-icons/bs';
import Day from "./Day";


export default function Habit() {

  const weekDays = ["S","T","Q","Q","S","S","D"];

  return (
    <HabitStyle>
      <p>Ler 1 capítulo de livro</p>
      <DaysList>
      {weekDays.map((weekDay, index) =><Day weekDay={weekDay}/>)}
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