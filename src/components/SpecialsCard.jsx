import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const SpecialsCard = (props) => {
  return (
    <Box w="80%" bg="gray.100" rounded="10px">
      <Image src={props.image} />
      <Box p={4}>
        <Flex alignItems="center" justifyContent="space-between" my={4}>
          <Heading as="h3" fontSize="2xl">
            {props.food}
          </Heading>
          <Text>{props.price}</Text>
        </Flex>
        <Text>{props.description}</Text>
      </Box>
    </Box>
  );
};

export default SpecialsCard;
