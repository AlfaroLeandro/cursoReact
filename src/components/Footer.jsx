import React from 'react';
import { AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import { Link } from '../GlobalComponents';
import { SocialIcons } from '../HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Chat</LinkTitle>
          <LinkItem target="_blank" href="https://wa.me/1132553928?text=%C2%A1Hola!%20Estoy%20interesado%20en%20tu%20servicio%20como%20desarrollador!">Whatt's App</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:leandro.ezequiel.alfaro.01@gmail.com">
            leandro.ezequiel.alfaro.01@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Copyright &copy; {year} <Link href="https://www.leandroAlfaro.com">  Leandro Alfaro</Link>.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons target="_blank" href="https://github.com/AlfaroLeandro">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons target="_blank" href="https://www.linkedin.com/in/leandro-alfaro-547864233">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>

    </FooterWrapper>
  );
};

export default Footer;
