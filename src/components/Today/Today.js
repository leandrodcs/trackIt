import Header from "../Header";
import styled from 'styled-components';
import Task from './Task';
import FooterMenu from "../FooterMenu";

export default function Today() {
  return (
    <>
      <Header />
      <Wrapper>
        <Day>
          <p>Segunda, 17/05</p>
          <p>Nenhum hábito concluído ainda</p>
        </Day>
        <TaskList>
          <Task />
          <Task />
          <Task />
        </TaskList>
      </Wrapper>
      <FooterMenu />
    </>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  min-height: calc(100vh - 70px);
  margin-top: 70px;
  padding: 0 16px 0 16px;
  background: #f2f2f2;
  gap: 28px;
  display: flex;
  flex-direction: column;
`;

const Day = styled.div`

  margin-top: 28px;

  p:nth-child(1){
    font-size: 23px;
    line-height: 29px;
    color: #126BA5;
  }

  p:nth-child(2){
    font-size: 18px;
    line-height: 22px;
    color: #BABABA;
  }
`;

const TaskList = styled.div`
display: flex;
flex-direction: column;
  gap: 10px;
`;
