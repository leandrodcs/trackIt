import FooterMenu from "./FooterMenu";
import Header from "./Header";
import styled from 'styled-components';
import Calendar from 'react-calendar';
import dayjs from "dayjs";
import 'dayjs/locale/pt-br'

export default function history() {
  return (
    <>
      <Header />
      <Background>
        <Wrapper>
          <h1>Histórico</h1>
          {/* <Calendar locale="pt-br"/> */}
          <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
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
  display: flex;
  flex-direction: column;

  h1 {
    color: #126BA5;
    font-size: 23px;
    line-height: 29px;
    margin: 29px 0 17px 0;
  }
  
  p {
    color: #666666;
    font-size: 18px;
    line-height: 22px;
  }

  div {
    
  }
`;