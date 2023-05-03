import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with many technologies in the web develoment ecosystem.
      Ranging from backend database developement to front end UI developement.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="4rem" />
        <ListContainer>
          <ListTitle>Programing Languages</ListTitle>
          <ListParagraph>
            Experience with <br />
            JavaScript <br />
            React.js <br />
            Next.js <br />
            .NET <br />
            C# <br />
            HTML and CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="4rem" />
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            SQL <br />
            Microsoft SQL Server <br />
            MongoDB <br />
            Node.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="4rem" />
        <ListContainer>
          <ListTitle>Data Visualization</ListTitle>
          <ListParagraph>
            Experience with <br />
            Tableau <br />
            Power BI
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
