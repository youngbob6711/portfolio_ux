import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <Slogan>Increasing skills one project at a time</Slogan> <br/> <Slogan>Trusting the process</Slogan>
      <LinkList>
        <LinkColumn>
          <LinkTitle>text:</LinkTitle>
          <LinkItem href="+254705379181">+254705379181</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email:</LinkTitle>
          <LinkItem href="mailto:alexngii6711@gmail.com">
            alexngii6711@gmail.com
          </LinkItem>
          
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          
        <p>Copyright @2022</p>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://google.com">
            <AiFillGithub size="2.9rem" />
          </SocialIcons>
          <SocialIcons href="https://google.com">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://google.com">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
