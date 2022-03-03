import styled from "styled-components";
import {checkLanguage, language} from "../../constants/language";
import {useRouter} from "next/router";
import Link from "next/link"
import {colors} from "../../styles/parameters";
import {CompanyLogo} from "./Navbar";
import {SiNextdotjs} from "react-icons/si";


const FooterBackground = styled.footer`
  background: #fafafa;
  border-top: 1px solid #eaeaea;
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
  color: ${({active}) => (active ? colors.text.primary : colors.text.secondary)};
  transition: .2s all ease-in-out;
  
  &:hover {
    color: ${colors.text.primary};
  }
`

const BottomText = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: ${colors.text.secondary};
`

const BottomLink = styled.a`
  color: ${colors.text.primary};
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

const LanguageLink = ({active, location, lang, children}) => {
  const new_link = location.slice(0, -2) + lang
  return (
    <Link href={new_link} passHref>
        <SectionLink active={active}>{children}</SectionLink>
    </Link>
  )
}

const Footer = () => {
  const data = language.footer
  const router = useRouter()

  const lang = checkLanguage(router.asPath.split("/")[-1])

  return (
    <FooterBackground>
      <FooterContainer>
        <InfoContainer>
          {data.info_section.map(({title, links}, key) => (
            <Section key={key}>
              <Header>{title(lang)}</Header>
              <TextContainer>
                {links.map(({text, link}, index) => {
                  if (link === "special-ru" || link === "special-en") {
                    const current_lang = link.split("-")[1]
                    console.log(lang, current_lang, lang === current_lang)
                    const active = lang === current_lang
                    return <LanguageLink key={index} active={active} location={router.asPath} lang={current_lang}>
                      {text(lang)}
                    </LanguageLink>
                  } else {
                    return <Text href={link} key={index}>{text(lang)}</Text>
                  }
                })}
              </TextContainer>
            </Section>
          ))}
        </InfoContainer>
        <InfoContainer>
          <Link href={"/" + lang} passHref>
            <CompanyLogo>MaglevName</CompanyLogo>
          </Link>
          <BottomText>© 2022 MaglevName. All rights reserved.</BottomText>
          <BottomText>Coded with {" "}
            <BottomLink href="//nextjs.org" target="_blank">
              <SiNextdotjs/>
            </BottomLink> by {" "}
            <BottomLink href="//github.com/ParzivalEugene" target="_blank">
              ParzivalEugene
            </BottomLink>
          </BottomText>
        </InfoContainer>
      </FooterContainer>
    </FooterBackground>
  );
};

export default Footer;