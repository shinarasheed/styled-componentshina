import React from "react";
import { Section } from "../globals/Section";
import Title from "../globals/Title";
import AboutImg from "../../images/aboutBcg.jpeg";
import {
  setRem,
  setBorder,
  setColor,
  setLetterSpacing,
  media,
} from "../../styles";
import { PrimaryBtn } from "../globals/Buttons";
import styled from "styled-components";

const About = () => {
  return (
    <Section>
      <AboutCenter>
        <div className="about-img">
          <img src={AboutImg} alt="about us" />
        </div>
        <div className="about-info">
          <Title title="about us" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, ab
            facilis. Molestiae quae dolorum maiores sed ipsam nam iusto
            laboriosam, fugit vel deleniti molestias minima, impedit dolor omnis
            nemo suscipit.
          </p>
          <PrimaryBtn>Read More</PrimaryBtn>
        </div>
      </AboutCenter>
    </Section>
  );
};

const AboutCenter = styled.div`
  .about-img,
  .about-info {
    padding: ${setRem(0)};
  }

  .about-img {
    img {
      width: 100%;
      display: block;
      ${setBorder({ width: setRem(6), color: setColor.primaryColor })}
    }
  }

  .about-info {
    p {
      ${setLetterSpacing(3)}
    }
  }

  width: 90vw;
  margin: 0 auto;

  ${media.desktop`
  width: 100vw;
  max-width:1170px;
  display:grid;
  grid-template-columns: 1fr 1fr;
  column-gap: ${setRem(80)};

  .about-img, .about-info{
    align-self:center;
  }

  .about-info{
    p{
      width:80%;
    }
  }
  
  `}
`;

export default About;
