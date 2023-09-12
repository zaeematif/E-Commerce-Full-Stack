import { styled } from "styled-components";
import { mobile } from "../responsive";
import Navbar from "../components/Navbar";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgb(255, 255, 255, 0.5), rgb(255, 255, 255, 0.5)),
    url("https://images.pexels.com/photos/9061874/pexels-photo-9061874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
      center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 50%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.div`
display: block
  font-size: 12px;
  margin: 20px 0;
`;

const Button = styled.button`
  width: 30%;
  padding: 15px 20px;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;

  & a {
    text-decoration: none;
    color: white;
  }
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Email" />
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
            voluptas. <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
