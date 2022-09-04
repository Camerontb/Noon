import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./Style/FooterStyles";
  
const Footer = () => {
  return (
    <Box>
     
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            
          </Column>
          <Column>
            <Heading>Services</Heading>
            
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            
          </Column>
          
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;