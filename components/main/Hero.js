import styled from "styled-components";
import {useDictionary} from "../../functions/detectLanguage";


const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 16rem 4rem;
  display: grid;
  grid-template-columns: 5.5fr 4.5fr;
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`

const Title = styled.h1`
  font-size: 7.2rem;
  font-weight: 800;
`

const Text = styled.p`
  font-size: 2.4rem;
  font-weight: 400;
`

const Hero = ({router}) => {
  const {data} = useDictionary(router)
  const dictionary = data.main.hero

  return (
    <Container>
      <InfoContainer>
        <Title>{dictionary.title}</Title>
        <>
          {dictionary.paragraphs.map((text, index) => (
            <Text key={index}>{text}</Text>
          ))}
        </>
      </InfoContainer>
    </Container>
  );
};

export default Hero;