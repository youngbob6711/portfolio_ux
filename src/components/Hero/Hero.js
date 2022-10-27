import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello there, <br/>
          I am Alex Ngii <br/>
          </SectionTitle>
        <SectionText>
        <code> UI/UX Designer & Front-End Developer </code> <br />
       I am passionate in developing user friendly websites/Apps by <br/>
       using Javascript and its Libraries. <br/>
        Its a overwhelming joy when my code finaly works. <br/>
        Hope you've experienced this feeling too. If not, you missing alot... hahaha
        </SectionText>
        <Button onClick={props.handleClick}>Download CV</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;