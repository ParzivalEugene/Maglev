import React, {useState} from 'react';
import styled from "styled-components";
import {motion} from "framer-motion";
import {RiCarFill, RiPlaneFill, RiTrainFill, RiTrainLine} from "react-icons/ri";
import {colors} from "../../styles/parameters";

const Container = styled(motion.div)`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 4rem 16rem;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6rem;
`

const Header = styled(motion.h1)`
  font-size: 4.8rem;
  
  mark {
    background: ${colors.blue};
    color: inherit;
  }
`

const DistanceContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: baseline;
  justify-items: center;
  gap: 8rem;
`

const DistanceButton = styled.div`
  input[type="radio"]:checked + label {
    color: ${colors.main};
    border-color: ${colors.pink};
  }
`

const DistanceLabel = styled(motion.label)`
  font-size: 2.4rem;
  color: ${colors.sub};
  cursor: pointer;
  
  padding: 2rem;
  background: ${colors.light_background};
  border-radius: 1.6rem;
  
  &:hover {
    color: ${colors.main};
  }
`

const SubHeader = styled(motion.h2)`
  font-size: 2.4rem;
`

const ChartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  
  margin-top: 2rem;
`

const ChartItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const ChartInfo = styled.div`
  display: inline-flex;
  justify-content: space-between;

  font-size: 3.6rem;
  color: ${colors.main};
`

const ChartIconContainer = styled.div`
  display: inline-flex;
  gap: 1rem;
`

const ChartFullLine = styled.div`
  background: ${colors.light_background};
  height: .6rem;
  border-radius: 1rem;
`

const ChartCurrentLine = styled.div`
  height: 100%;
  background: ${({special}) => (special ? colors.blue : colors.green)};
  border-radius: 1rem;
  width: ${({width}) => (width)}%;
`

const Speeds = ({ translate }) => {
  const dictionary = translate.main.speeds
  const [distance, setDistance] = useState(1000)
  const distances = [1000, 2500, 6000]
  const velocities = {
    maglev: 400,
    plane: 360,
    train: 120,
    car: 80
  }
  const items = [
    {
      name: dictionary.names.maglev,
      icon: <RiTrainLine/>,
      velocity: velocities.maglev
    },
    {
      name: dictionary.names.plane,
      icon: <RiPlaneFill/>,
      velocity: velocities.plane
    },
    {
      name: dictionary.names.train,
      icon: <RiTrainFill/>,
      velocity: velocities.train
    },
    {
      name: dictionary.names.car,
      icon: <RiCarFill/>,
      velocity: velocities.car
    },
  ]

  const createChartVelocity = (velocity) => {
    // return (distance / velocity) / (distance / velocities.car) * 100
    return (distance / velocity) / (Math.ceil(distance / velocities.car / 200) * 200) * 100
  }

  const createChartTime = (velocity) => {
    return (distance / velocity).toFixed(1)
  }

  return (
    <Container>
      <Header>{dictionary.header_mark} {dictionary.header}</Header>

      <DistanceContainer>
        <SubHeader>{dictionary.sub_header}</SubHeader>
        {distances.map((distance, key) => (
          <DistanceButton>
            <input type="radio" id={distance.toString()} name="speeds" hidden={true} onChange={
              () => setDistance(distance)
            }/>
            <DistanceLabel htmlFor={distance.toString()}>{distance} {dictionary.names.kilometer}</DistanceLabel>
          </DistanceButton>
        ))}
      </DistanceContainer>

      <ChartContainer>
        {items.map(({name, icon, velocity}, key) => (
          <ChartItem key={key}>
            <ChartInfo>
              <ChartIconContainer>
                {icon}
                {name}
              </ChartIconContainer>
              {createChartTime(velocity)} {dictionary.names.hour}
            </ChartInfo>
            <ChartFullLine>
              <ChartCurrentLine width={createChartVelocity(velocity)}/>
            </ChartFullLine>
          </ChartItem>
        ))}
      </ChartContainer>
    </Container>
  );
};

export default Speeds;