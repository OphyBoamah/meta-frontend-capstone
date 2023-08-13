import { Box, Button, Heading, Text, Image, Flex } from "@chakra-ui/react";
import React from "react";
import HeroImage from "../assets/japanese-platter.jpg";

const Hero = () => {
  return (
    <Box color="#fff" bg="#495E57" pt={20} pb={20} mt={20}>
      <Flex align="center">
        <Box width="45%" ml={20}>
          <Heading as="h1" fontSize="5xl" color="#F4CE14">
            Little Lemon Chicago
          </Heading>
          <Text w="70%" my={5}>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </Text>
          <a href="#reservation">
            <Button rounded="30px" color="#495E57" bg="#F4CE14">
              Reserve a table
            </Button>
          </a>
        </Box>
        <Image src={HeroImage} alt="hero image" w="35rem" rounded={5} />
      </Flex>
    </Box>
  );
};

export default Hero;
