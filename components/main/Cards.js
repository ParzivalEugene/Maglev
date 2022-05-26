import React from 'react';
import {RiEarthFill, RiLineChartLine, RiDvdFill, RiAccountCircleFill} from 'react-icons/ri'
import styled from "styled-components";
import {motion} from "framer-motion";
import {colors} from "../../styles/parameters";

const Container = styled(motion.div)`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 4rem 16rem;
`

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: stretch;
  gap: 4rem;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  
  background: ${colors.light_background};
  border-radius: 1rem;
`

const CardIcon = styled.div`
  color: ${colors.main};
  font-size: 6.4rem;
`

const CardHeader = styled.h1`
  font-size: 3.2rem;
`

const CardText = styled.p`
  margin-top: 2rem;
  font-size: 1.6rem;
  text-align: justify;
`

const Cards = () => {
  return (
    <Container>
      <CardsContainer>
        <Card>
          <CardIcon>
            <RiEarthFill/>
          </CardIcon>
          <CardHeader>Ecology</CardHeader>
          <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam aut consequuntur cupiditate dicta dignissimos distinctio dolorem doloribus eius explicabo magnam, obcaecati quam, quidem quos ratione sed soluta velit voluptate!</CardText>
        </Card><Card>
        <h1>Hello</h1>
      </Card><Card>
        <h1>Hello</h1>
      </Card><Card>
        <h1>Hello</h1>
      </Card>
      </CardsContainer>
    </Container>
  );
};

export default Cards;