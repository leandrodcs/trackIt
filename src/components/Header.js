import styled from 'styled-components';
import profilePic from '../assets/Profile-default.png';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';

export default function Header() {

  const userInfo = useContext(UserContext);
  const {image} =userInfo;

  return (
    <HeaderStyle>
      <Title>TrackIt</Title>
      <img src={image} alt=""/>
    </HeaderStyle>
);
}

const HeaderStyle = styled.header`
  background: #126BA5;
  position: fixed;
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

