import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    // Form validation
    initialValues: {
      date: "",
      time: "",
      guests: "",
      name: "",
      email: "",
      details: "",
    },
    onSubmit: (values) => {
      submit("", values);
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      // details: Yup.string()
      //   .min(5, "Must be at least 25 characters")
      //   .required("Required"),
    }),
  });

  // Show an alert when the form is submitted successfully
  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      // Reset the form if the response is successful
      if (response.type === "success") formik.resetForm();
    }
  }, [response]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      // py={4}
      spacing={8}
    >
      <VStack w="1024px" p={24} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Table Reservation
        </Heading>
        <Box p={6} rounded="md" w="100%">
          {/* Connect the form onSubmit prop with Formik's handleSubmit function */}
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              {/* Show the error messages for each field when the field is touched and the validation fails */}
              <FormControl
                isInvalid={!!formik.errors.date && formik.touched.date}
              >
                <FormLabel htmlFor="date">Reservation Date</FormLabel>
                <Input
                  type="date"
                  id="date"
                  name="date"
                  {...formik.getFieldProps("date")} // Make the Input components from Chakra UI controlled components
                />
                {/* Show the error messages for each field when the field is touched and the validation fails */}
                <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={!!formik.errors.time && formik.touched.time}
              >
                <FormLabel htmlFor="date">Reservation Time</FormLabel>
                <Input
                  type="time"
                  id="time"
                  name="time"
                  {...formik.getFieldProps("time")} // Make the Input components from Chakra UI controlled components
                />
                {/* Show the error messages for each field when the field is touched and the validation fails */}
                <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={!!formik.errors.guests && formik.touched.guests}
              >
                <FormLabel htmlFor="guests">Number of Guests</FormLabel>
                <Input
                  type="number"
                  min="1"
                  max="10"
                  id="guests"
                  name="guests"
                  {...formik.getFieldProps("guests")} // Make the Input components from Chakra UI controlled components
                />
                {/* Show the error messages for each field when the field is touched and the validation fails */}
                <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={
                  !!formik.errors.firstName && formik.touched.firstName
                }
              >
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps("firstName")} // Make the Input components from Chakra UI controlled components
                />
                {/* Show the error messages for each field when the field is touched and the validation fails */}
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={!!formik.errors.email && formik.touched.email}
              >
                {/* Show the error messages for each field when the field is touched and the validation fails */}
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")} // Make the Input components from Chakra UI controlled components
                />
                {/* Show the error messages for each field when the field is touched and the validation fails */}
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={!!formik.errors.comment && formik.touched.comment}
              >
                <FormLabel htmlFor="comment">Extra Details?</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps("comment")}
                />
                {/* Show the error messages for each field when the field is touched and the validation fails */}
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              {/* Show a loading indicator */}
              <Button
                type="submit"
                colorScheme="purple"
                width="full"
                isLoading={isLoading}
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
