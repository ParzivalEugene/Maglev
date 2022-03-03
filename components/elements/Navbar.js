import styled from "styled-components";
import Link from "next/link";
import {colors} from "../../styles/parameters";
import {useDictionary} from "../../functions/detectLanguage";
import {motion} from "framer-motion";


const Nav = styled(motion.nav)`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2.4rem 4rem;

  display: grid;
  grid-template-columns: 1fr auto 1fr;
  justify-items: center;
  align-items: baseline;
`

export const CompanyLogo = styled.a`
  font-size: 2.4rem;
  justify-self: start;
  font-weight: 700;
`

const NavTabs = styled.div`
  display: inline-flex;
  gap: 8rem;
`

const NavTab = styled.a`
  font-size: 2rem;
  font-weight: 400;
`

const NavButton = styled.a`
  justify-self: end;
  background: ${colors.primary["500"]};
  border-radius: 8px;
  padding: 1rem 2rem;
  color: white;
  font-size: 2.4rem;
  font-weight: 400;
  border: 1px solid transparent;
  transition: .1s all ease-in-out;

  &:hover {
    background: white;
    border: 1px solid ${colors.primary["500"]};
    color: ${colors.primary["500"]};
  }
`

export const Navbar = ({router}) => {
  let {data, lang} = useDictionary(router)
  const dictionary = data.navbar

  return (
    <Nav>
      <Link href={"/" + lang} passHref>
        <CompanyLogo>MaglevName</CompanyLogo>
      </Link>
      <NavTabs>
        <Link href={dictionary.tabs.about.link} passHref>
          <NavTab>{dictionary.tabs.about.text}</NavTab>
        </Link>
        <Link href={dictionary.tabs.team.link} passHref>
          <NavTab>{dictionary.tabs.team.text}</NavTab>
        </Link>
        <Link href={dictionary.tabs.docs.link} passHref>
          <NavTab>{dictionary.tabs.docs.text}</NavTab>
        </Link>
      </NavTabs>
      <NavButton>{dictionary.button.text}</NavButton>
    </Nav>
  )
}