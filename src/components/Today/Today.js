import Header from "../Header";
import styled from 'styled-components';
import Task from './Task';
import FooterMenu from "../FooterMenu";
import UserContext from '../../contexts/UserContext';
import ProgressContext from '../../contexts/ProgressContext';
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br'

export default function Today({setProgress}) {

  const userInfo = useContext(UserContext);
  const progressInfo = useContext(ProgressContext);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    }
    axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
    .then(res => {
      setTasks(res.data);
      updateProgress(res.data);
    })
    .catch(err => alert(err));
  }, [userInfo.token]);

  function updateList() {
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    }
    axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
    .then(res => {
      console.log(res.data);
      setTasks(res.data);
      updateProgress(res.data);
    })
    .catch(err => console.log);
  }

  function updateProgress(tasks) {
    let progress = 0;
    tasks.forEach(task => {
      if(task.done) {
        progress+= (1/tasks.length);
      }
    })
    setProgress(progress);
  }

  return (
    <>
      <Header />
      <Background>
        <Wrapper>
          <Day progress={progressInfo}>
            <p>{dayjs().locale('pt-br').format('dddd')}, {dayjs().locale('pt-br').format('DD/MM')}</p>
            <p>{!progressInfo ? `Nenhum hábito concluído ainda` : `${(progressInfo*100).toFixed(0)}% dos hábitos concluídos`}</p>
          </Day>
          <TaskList>
            {tasks.map(task => <Task taskInfo={task} key={task.id} updateList={updateList}/>)}
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
    color: ${props => props.progress ? `#8FC549` : `#BABABA`};
  }
`;

const TaskList = styled.div`
display: flex;
flex-direction: column;
  gap: 10px;
`;
