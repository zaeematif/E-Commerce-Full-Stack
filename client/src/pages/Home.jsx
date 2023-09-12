import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import styled from "styled-components";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  color: #3c4142;
  margin: 50px 0px 10px 0px;
  background-color: #fcf5f5;
  padding: 30px;
  ${mobile({ margin: "0", padding: "5px", textAlign: "center" })}
`;

const Home = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <Slider />
      <Categories />
      <Heading> PRODUCT LISTING </Heading>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
