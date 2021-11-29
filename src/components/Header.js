import styled from 'styled-components';
import { useContext, useEffect } from 'react';
import UserContext from '../contexts/UserContext';
import { useHistory } from 'react-router';

export default function Header() {
  const userInfo = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if(!userInfo.image) return history.push('/');
  }, [userInfo, history]);

  return (
    <HeaderStyle>
      <Title>TrackIt</Title>
      <img src={userInfo.image} alt=""/>
    </HeaderStyle>
);
}

const HeaderStyle = styled.header`
  background: #126BA5;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px 0 18px;

  img {
    width: 51px;
    height: 51px;
    border-radius: 100px;
  }
`;

const Title = styled.header`
  font-family: 'Playball', cursive;
  font-size: 39px;
  color: #FFFFFF;
`;

