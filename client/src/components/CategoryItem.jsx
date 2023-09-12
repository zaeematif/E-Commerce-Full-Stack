import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { styled } from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  overflow: hidden;

  &:hover img {
    transform: scale(1.3);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.5s;
  }
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  font-size: 50px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: none;
  padding: 15px;
  font-size: 20px;
  background-color: white;
  cursor: pointer;
  font-weight: 600;

  & a {
    color: gray;
    font-weight: 600;
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button> SHOP NOW </Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
