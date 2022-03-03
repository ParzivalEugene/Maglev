import styled from "styled-components";
import Link from "next/link";
import {checkLanguage, language} from "../../constants/language";
import {useRouter} from "next/router";
import {colors} from "../../styles/parameters";


const Nav = styled.nav`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 4rem;

  display: grid;
  grid-template-columns: 1fr auto 1fr;
  justify-items: center;
  align-items: baseline;
`

export const CompanyLogo = styled.a`
  font-size: 3.6rem;
  justify-self: start;
  font-weight: 700;
`

const NavTabs = styled.div`
  display: inline-flex;
  gap: 8rem;
`

const NavTab = styled.a`
  font-size: 2.4rem;
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

export const Navbar = () => {
  const data = language.navbar
  const router = useRouter()
  const lang = checkLanguage(router.asPath.split("/")[-1])
  return (
    <Nav>
      <Link href={"/" + lang} passHref>
        <CompanyLogo>MaglevName</CompanyLogo>
      </Link>
      <NavTabs>
        <Link href={data.tabs.about.link + lang} passHref>
          <NavTab>{data.tabs.about.text(lang)}</NavTab>
        </Link>
        <Link href={data.tabs.team.link + lang} passHref>
          <NavTab>{data.tabs.team.text(lang)}</NavTab>
        </Link>
        <Link href={data.tabs.docs.link + lang} passHref>
          <NavTab>{data.tabs.docs.text(lang)}</NavTab>
        </Link>
      </NavTabs>
      <NavButton>{data.button.text(lang)}</NavButton>
    </Nav>
  )
}