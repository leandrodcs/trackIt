import axios from 'axios';
import { FaCheck } from 'react-icons/fa';
import styled from 'styled-components';
import UserContext from '../../contexts/UserContext';
import { useContext, useState } from "react";


export default function Task({taskInfo}) {

  const {name, currentSequence, highestSequence, done, id} = taskInfo;
  const userInfo = useContext(UserContext);
  const [complete, setComplete] = useState(done);

  function markHabitAsComplete() {
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    }
    axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/${complete ? `uncheck` : `check`}`, {}, config)
      .then(res => {
        console.log(res.data);
        if(complete) {
          setComplete(false);
        }
        else {
          setComplete(true);
        }
      })
      .catch(err => console.log);
  }

  return (
    <Wrapper complete={complete}>
      <div>
        <p>{name}</p>
        <p>Sequência atual: {currentSequence} dias<br/>Seu recorde: {highestSequence} dias</p>
      </div>
      <button onClick={markHabitAsComplete}>
        <FaCheck />
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.div`

  display: flex;
  justify-content: space-between;
  padding: 12px 12px 12px 12px;
  background: #FFFFFF;
  height: 94px;
  border-radius: 5px;

  p {
    color: #666666;
  }

  p:nth-child(1){
    font-size: 20px;
    line-height: 25px;
  }

  p:nth-child(2){
    font-size: 13px;
    line-height: 16px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  button {
    width: 69px;
    height: 69px;
    border-radius: 5px;
    border: 1px solid #E7E7E7;
    background: ${props => props.complete ? `#8FC549` : `#EBEBEB`};
    font-size: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
  }
`;