import styled from "styled-components";

export const Main = styled.div`
  background: #313552;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 350px;
  width: 400px;
`;
export const Head = styled.p`
  color: #fff;
  font-size: 2.3rem;
`;

export const Para = styled.p`
  color: #84dfff;
`;

export const Input = styled.input`
  font-size: 1.1rem;
  background: #313552;
  width: 400px;
  height: 28px;
  margin: 5px;
  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  color: #fff;
`;

export const Button = styled.button`
  margin-top: 20px;
  width: 80px;
  height: 35px;
  border: none;
  border-radius: 30px;
`;
