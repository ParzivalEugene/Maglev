import styled from "styled-components";
import Link from "next/link"
import {colors} from "../../styles/parameters";
import {CompanyLogo} from "./Navbar";
import {SiNextdotjs, SiThreedotjs} from "react-icons/si";
import {motion} from "framer-motion";


const FooterBackground = styled(motion.footer)`
  background: ${colors.light_background};
  //border-top: 1px solid ${colors.blue};
`

const FooterContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem;
  
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;
  gap: 8rem;
  
  color: ${colors.main};
`

const InfoContainer = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: baseline;
`

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const Header = styled.h2`
  font-size: 1.6rem;
  font-weight: 500;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const SectionLink = styled.a`
  font-size: 1.6rem;
  font-weight: 400;
  color: ${({active}) => (active ? colors.main : colors.sub)};
  transition: .2s all ease-in-out;
  
  &:hover {
    color: ${colors.main};
  }
`

const BottomText = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: ${colors.main};
`

const BottomLink = styled.a`
  color: ${colors.main};
  font-weight: 500;
`

const Text = ({children, href}) => {
  return (
    <SectionLink
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      {children}
    </SectionLink>
  )
}

const LanguageLink = ({active, lang, children}) => {
  return (
    <Link href={"/"} locale={lang} passHref>
        <SectionLink active={active}>{children}</SectionLink>
    </Link>
  )
}

const Footer = ({ router, translate, locale }) => {
  const dictionary = translate.footer

  return (
    <FooterBackground>
      <FooterContainer>
        <InfoContainer>
          {dictionary.info.map(({title, links}, key) => (
            <Section key={key}>
              <Header>{title}</Header>
              <TextContainer>
                {links.map(({text, link}, index) => {
                  if (link === "lang_ru" || link === "lang_en") {
                    const lang = link.slice(5, 7)
                    const active = locale === lang
                    return <LanguageLink key={index} active={active} lang={lang}>
                      {text}
                    </LanguageLink>
                  } else {
                    return <Text href={link} key={index}>{text}</Text>
                  }
                })}
              </TextContainer>
            </Section>
          ))}
        </InfoContainer>
        <InfoContainer>
          <Link href={"/" + locale} passHref>
            <CompanyLogo>MaglevName</CompanyLogo>
          </Link>
          <BottomText>© 2022 MaglevName. All rights reserved.</BottomText>
          <BottomText>Coded with {" "}
            <BottomLink href="//nextjs.org" target="_blank">
              <SiNextdotjs/>
            </BottomLink> and {" "}
            <BottomLink href="//threejs.org" target="_blank">
              <SiThreedotjs/>
            </BottomLink> by {" "}
            <BottomLink href="//www.michkoff.com" target="_blank">
              ParzivalEugene
            </BottomLink>
          </BottomText>
        </InfoContainer>
      </FooterContainer>
    </FooterBackground>
  );
};

export default Footer;