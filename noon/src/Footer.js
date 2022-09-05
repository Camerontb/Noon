import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  Heading,
} from "./Style/FooterStyles";
  
const Footer = () => {
  return (
    <Box>
     
      <Container>
        <Row>
          <Column>
            <Heading>Tidal Information</Heading>
            
          </Column>
          <Column>
            <Heading></Heading>
            
          </Column>
          <Column>
            <Heading>Contact</Heading>
            
          </Column>
          
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;