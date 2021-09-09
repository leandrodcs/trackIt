import { Link } from 'react-router-dom';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import styled from 'styled-components';

export default function FooterMenu() {
    return (
      <>
        <Menu>
            <Link to="/habitos">Hábitos</Link>
            <Link to="/hoje">
              <CircularProgressbarWithChildren maxValue={1} value={0.5}><p>Hoje</p></CircularProgressbarWithChildren>
            </Link>
            <Link to="/historico">Histórico</Link>
        </Menu>
        <MarginBottom />
      </>
    );
}

const MarginBottom = styled.div`
  width: 100%;
  height: 110px;
  background: #f2f2f2;
`;

const Menu = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background: #FFFFFF;
  display: flex;
  align-items: center;
  padding: 0 34px 0 34px;
  justify-content: space-between;
  font-size: 18px;

  a{
    color: #52B6FF;
    text-decoration: none;
  }

  a:nth-child(2) {
    background: #52B6FF;
    width: 91px;
    height: 91px;
    border-radius: 100px;
    margin-bottom: 32px;
    color: #FFFFFF;
    padding: 4px;
  }

  .CircularProgressbar-path {
    stroke: #FFFFFF;
    stroke-linecap: round;
  }

  p {
    margin-bottom: 10px;
  }
`;