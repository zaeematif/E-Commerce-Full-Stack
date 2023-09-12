import { Send } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  padding-left: 20px;
  flex: 8;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background-color: #012929;
    transform: scale(1.1);
  }
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newletter</Title>
      <Desc>Get timely updates from your favourite products.</Desc>

      <InputContainer>
        <Input placeholder="Your Email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
