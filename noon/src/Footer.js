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
      <h1 style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        CMarine
      </h1>
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