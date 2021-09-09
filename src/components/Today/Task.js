import { FaCheck } from 'react-icons/fa';
import styled from 'styled-components';

export default function Task() {
  return (
    <Wrapper>
      <div>
        <p>Ler 1 capítulo de livro</p>
        <p>Sequência atual: 3 dias<br/>Seu recorde: 5 dias</p>
      </div>
      <button>
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
    background: #EBEBEB;
    font-size: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
  }
`;