import Header from "./Header";
import styled from 'styled-components';

export default function Today() {
  return (
    <>
      <Header />
      <Wrapper></Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  margin-top: 70px;
  padding: 0 17px 0 17px;
`;