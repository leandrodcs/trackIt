import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import { useHistory } from 'react-router';
import Loader from "react-loader-spinner";

export default function Login({setUser}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [load, setLoad] =useState(false);
  const history = useHistory();

  function logIn() {
    const body = {
      email,
      password
    };
    setLoad(true);
    axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body)
      .then(res => {
        setUser(res.data);
        history.push("/hoje");
        setLoad(false);
      })
      .catch(err => {
        alert("Email ou senha incorretos ou inexistentes!");
        setLoad(false);
      });
  }

  return (
    <>
      <Wrapper load={load}>
        <img src={logo} alt=""/>
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="email" />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="senha" />
        <button onClick={logIn}>{load ? <Loader type="ThreeDots" color="#FFFFFF" height={13} /> : `Entrar`}</button>
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
    background: ${props => props.load ? `#F2F2F2` : `#FFFFFF`};
    pointer-events: ${props => props.load ? `none` : `initial`};
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
    pointer-events: ${props => props.load ? `none` : `initial`};
    opacity: ${props => props.load ? `0.7` : `1`};
  }

  a {
    font-size: 14px;
    color: #52B6FF;
    margin-top: 19px;
    word-wrap: break-word;
  }
`;