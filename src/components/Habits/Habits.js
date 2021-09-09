import Header from "../Header";
import styled from 'styled-components';
import FooterMenu from "../FooterMenu";
import { BiPlus } from 'react-icons/bi';
import Day from "./Day";
import Habit from "./Habit";


export default function Habits() {

  const days = ["D","S","T","Q","Q","S","S",];



  return (
    <>
      <Header />
      <Background>
        <Wrapper>
          <HabbitsHeader>
            <p>Meus hábitos</p>
            <button>
              <BiPlus />
            </button>
          </HabbitsHeader>
          <AddWindow>
            <input placeholder="nome do hábito" />
            <DaysList>
              {days.map(day => <Day day={day}/>)}
            </DaysList>
            <Buttons>
              <div />
              <div>
                <button>Cancelar</button>
                <button>Salvar</button>
              </div>
            </Buttons>
          </AddWindow>
          <HabitsList>
          <Habit />
          <Habit />
          <Habit />
          </HabitsList>
          {/* <EmptyMsg>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
          </EmptyMsg> */}
        </Wrapper>
      </Background>
      <FooterMenu />
    </>
  );
}

const Background = styled.div`
  min-height: calc(100vh - 180px);
  width: 100vw;
  background: #f2f2f2;
`;

const HabitsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px

`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;

  div {
    display: flex;
    gap: 5px;
  }

  button {
    border-radius: 4.6px;
    font-size: 16px;
    line-height: 20px;
    width: 84px;
    height: 35px;
    border: none;
  }
  button:nth-child(1) {
    background: #FFFFFF;
    color: #52B6FF;
  }
  button:nth-child(2) {
    background: #52B6FF;
    color: #FFFFFF;
  }
`;

const DaysList = styled.ul`
  display: flex;
  gap: 4px;
  margin-top: 10px;

`;

const AddWindow = styled.div`
  width: 100%;
  height: 180px;
  background: #FFFFFF;
  border-radius: 5px;
  padding: 17px;

  input {
    height: 45px;
    width: 100%;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-size: 20px;
    padding: 0 10px;
    line-height: 25px;
    outline: none;
    color: #666666;
  }

  input::placeholder {
    color: #DBDBDB;
  }

`;

const Wrapper = styled.div`
  margin-top: 70px;
  padding: 0 16px 0 16px;
  background: #f2f2f2;
  gap: 28px;
  display: flex;
  flex-direction: column;
`;

const HabbitsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 22px;

  p {
    color: #126BA5;
    font-size: 23px;
    line-height: 29px;
  }

  button {
    width: 40px;
    height: 35px;
    background: #52B6FF;
    border: none;
    border-radius: 4.6px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 27px;
  }
`;

const EmptyMsg = styled.p`
  font-size: 18px;
  line-height: 22px;
  color: #666666;
  word-wrap: break-word;

`;