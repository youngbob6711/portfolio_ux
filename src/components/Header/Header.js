import Link from 'next/link';
import React from 'react';
import { AiFillCaretDown, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';
import { DiScala } from 'react-icons/di';
import { GoMarkGithub } from 'react-icons/go'
import { ImFacebook } from 'react-icons/im'

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiScala size="2.4rem" />  <span>Alex Ngii</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Awards</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>Projects</NavLink>
        </Link>
      </li> 
      <li>
        <Link href="#about">
          <NavLink>Footer</NavLink>
        </Link>
      </li> 
      <li>
        <Link href="#footer">
          <NavLink>go down<AiFillCaretDown size="1.7rem"/> </NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://google.com">
          <GoMarkGithub size="1.9rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillLinkedin size="1.9rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiOutlineTwitter size="1.9rem"/>
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <ImFacebook size="1.9rem"/>
        </SocialIcons>

      </Div3>
    </Container>
);

export default Header;
