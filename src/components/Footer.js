import React from "react";
import {
  Box,
  Flex,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import footerLogo from "../assets/footer-image.png";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Footer = () => {
  return (
    <Box pt={20} pl={20} pb={10} backgroundColor="#18181b" color="#fff">
      <footer>
        <SimpleGrid columns={3}>
          <Image src={footerLogo} alt="footer logo" w={20} />
          <Box marginLeft="-32">
            <Heading as="h3" fontSize="lg" pb={8}>
              Menu
            </Heading>
            <Text>About</Text>
            <Text>Testimonial</Text>
            <Text>Contact</Text>
          </Box>
          <Box marginLeft={-80}>
            <Heading as="h3" fontSize="lg" pb={8}>
              Contact us
            </Heading>
            <HStack spacing={10}>
              {socials.map(({ icon, url }) => (
                <a
                  key={url}
                  href={url}
                  icon={icon}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon key={url} icon={icon} size="2x" />
                </a>
              ))}
            </HStack>
          </Box>
        </SimpleGrid>
        <Flex mt={6} color="white">
          <p>Ophy • © 2023</p>
        </Flex>
      </footer>
    </Box>
  );
};

export default Footer;
