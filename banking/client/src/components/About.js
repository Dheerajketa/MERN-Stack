// About.js

import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  text-align: center;
  padding: 50px;
`;

const Heading = styled.h1`
  color: #24252a;
`;

const Description = styled.p`
  color: #555;
  font-size: 18px;
  line-height: 1.5;
`;

function About() {
    return (
        <AboutContainer>
            <Heading>About Us</Heading>
            <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec
                odio eu urna tincidunt efficitur. Nullam sit amet libero et risus
                bibendum consectetur. ...
            </Description>
        </AboutContainer>
    );
}

export default About;
