import { Box, Grid, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import SpecialsCard from "./SpecialsCard";
import Burger from "../assets/burger.jpg";
import LemonCake from "../assets/lemon-cake.jpg";
import Salad from "../assets/salad.jpg";

const Specials = () => {
  return (
    <Box id="menu">
      <Heading as="h1" fontSize="5xl" textAlign="center" py={20}>
        This week's specials!
      </Heading>
      <Grid
        templateColumns="repeat(3, 1fr)"
        alignItems="center"
        marginLeft={24}
      >
        <SpecialsCard
          image={Burger}
          food="Burger"
          price="$5.99"
          description="Our Burger is crafted from a juicy, seasoned beef patty that's nestled
          between freshly baked buns, complemented by crisp lettuce, ripe
          tomatoes, and a touch of our sauce."
        />
        <SpecialsCard
          image={LemonCake}
          food="Lemon Cake"
          price="$5.99"
          description="Our Lemon Cake is a delicate blend of zesty lemon and sweet cake layers, drizzled with a tangy lemon glaze, offering a perfect balance of tart and sweet in every slice."
        />
        <SpecialsCard
          image={Salad}
          food="Salad"
          price="$5.99"
          description="Our Salad is a refreshing mix of crisp greens, juicy tomatoes, and crunchy cucumbers, all tossed in a light vinaigrette and sprinkled with a hint of sea salt and black pepper."
        />
      </Grid>
    </Box>
  );
};

export default Specials;
