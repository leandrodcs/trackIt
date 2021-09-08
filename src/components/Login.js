import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo.png';

export default function Login() {
  return (
    <>
      <Wrapper>
        <img src={logo} alt=""/>
        <input placeholder="email" />
        <input placeholder="senha" />
        <button>Entrar</button>
        <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 68px 36px 0 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 30px;
  gap: 6px;

  img {
    margin: 0 0 34px 0;
  }

  input {
    font-family: "Lexend Deca", sans-serif;
    width: 100%;
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    outline: none;
    font-size: 20px;
    padding: 0 10px 0 10px;

  }

  input::placeholder {

    color: #DBDBDB;
  }

  button {
    background: #52B6FF;
    width: 100%;
    height: 45px;
    border: none;
    border-radius: 5px;
    color: #FFFFFF;
    font-size: 21px;
  }
  
  a {
    font-size: 14px;
    color: #52B6FF;
    margin-top: 19px;
    word-wrap: break-word;
  }
`;