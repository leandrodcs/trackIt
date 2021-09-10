import Header from "../Header";
import styled from 'styled-components';
import Task from './Task';
import FooterMenu from "../FooterMenu";
import UserContext from '../../contexts/UserContext';
import { useState, useContext, useEffect } from "react";
import axios from "axios";




export default function Today() {

  const userInfo = useContext(UserContext);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    }
    axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
    .then(res => {
      console.log(res.data);
      setTasks(res.data);
    })
    .catch(err => console.log);
  }, []);


  return (
    <>
      <Header />
      <Background>
        <Wrapper>
          <Day>
            <p>Segunda, 17/05</p>
            <p>Nenhum hábito concluído ainda</p>
          </Day>
          <TaskList>
            {tasks.map(task => <Task taskInfo={task} key={task.id} />)}
          </TaskList>
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

const Wrapper = styled.div`
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
