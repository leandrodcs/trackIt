import styled from "styled-components";
import { BsTrash } from 'react-icons/bs';
import { useContext } from "react";
import UserContext from '../../contexts/UserContext';
import Day from "./Day";
import axios from "axios";



export default function Habit({habitInfo, setHabits, habits}) {

  const userInfo = useContext(UserContext);
  const weekDays = ["S", "T", "Q", "Q", "S", "S", "D"];

  function deleteHabit() {
    if(!window.confirm("Deseja mesmo excluir esse hábito?")) {
      return;
    }
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    }
    axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitInfo.id}`, config)
      .then(res => {
        console.log(res)
        setHabits(habits.filter(habit => !(habit.id === habitInfo.id) ? true : false))
      })
      .catch(err => console.log);
  }

  return (
    <HabitStyle>
      <p>{habitInfo.name}</p>
      <DaysList>
      {weekDays.map((weekDay, index) =><Day weekDay={weekDay} key={index} dayNumber={index + 1} habitDays={habitInfo.days}/>)}
      </DaysList>
      <BsTrash onClick={deleteHabit} />
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