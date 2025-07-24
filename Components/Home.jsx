// src/pages/Home.jsx
import React from 'react';
import {coffees} from '../PopularCoffees';
import styled from 'styled-components';
import { BiQrScan } from 'react-icons/bi';
import { FaDollarSign } from "react-icons/fa";

const Wrapper = styled.div`
  font-family: 'Inter', sans-serif;
`;

const HeroSection = styled.div`
  position: relative;
  height: 380px;
  background: url('/Images/Main.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
`;

const HeroContent = styled.div`
  position: relative;
  color: white;
  text-align: center;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin: 0.2em 0;
  }

  h3 {
    font-weight: 300;
    font-size: 1.2rem;
    letter-spacing: 2px;
  }

  p {
    font-size: 0.9rem;
    color: #ddd;
  }
`;

const MainSection = styled.div`
  padding: 2rem;
  background-color: #f8f8f8;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  h2 {
    font-size: 1.5rem;
  }
`;

const CurrencyTag = styled.div`
  background: #222;
  color: white;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 0.9rem;
  transition: 0.2s;

  &:hover{
     transform: scale(1.2);
     cursor : pointer;
     background-color : black;
     color : white;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
`;

const Card = styled.div`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }
`;

const CardContent = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor : pointer;

  h3 {
    margin: 0;
    font-size: 1.1rem;
  }

  p {
    margin: 0.2rem 0 0;
    color: #555;
    font-size: 0.9rem;
  }
`;



const Home = () => {



    



  return (
    <Wrapper>
      <HeroSection>
        <Overlay />
        <HeroContent>
          <h3>SIMPLY CLEVER</h3>
          <h1>BEST COFFEE</h1>
          <p>order now</p>
        </HeroContent>
      </HeroSection>

      <MainSection>
        <SectionHeader>
          <h2>Popular Coffees</h2>
          <CurrencyTag>USD</CurrencyTag>
        </SectionHeader>

        <CardGrid>
          {coffees.map(coffee => (
            <Card key={coffee.id}>
              <img src={coffee.img} alt={coffee.name} />
              <CardContent>
                <div>
                  <h3>{coffee.title}</h3>
                  <h4 style={{color : '#774A47'}}>Price <FaDollarSign style={{ fontSize: '15px', color: '#774A47' }} />{coffee.combinedIngredientsPrice + 2}</h4>
                </div>
                <BiQrScan size={24} />
              </CardContent>
            </Card>
          ))}
        </CardGrid>
      </MainSection>
    </Wrapper>
  );
};

export default Home;
