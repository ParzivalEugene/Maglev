import styled from "styled-components";
import {language} from "../../constants/language";
import {motion} from "framer-motion";


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

const Hero = ({lang}) => {
  const data = language.main.hero
  return (
    <Container>
        <InfoContainer>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: .8,
                opacity: 0
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: .4
                }
              }
            }}
          >
            <Title>{data.title(lang)}</Title>
          </motion.div>
          <Text>{data.paragraphs.one(lang)}</Text>
          <Text>{data.paragraphs.two(lang)}</Text>
        </InfoContainer>
    </Container>
  );
};

export default Hero;