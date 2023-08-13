import { useState } from "react";
import FormFields from "./FormFields";
import { Box, Button, Input, Select, Textarea } from "@chakra-ui/react";

const ReservationForm = ({
  availableTimes,
  dispatchOnDateChange,
  submitData,
}) => {
  const minimumDate = new Date().toISOString().split("T")[0];
  const defaultTime = availableTimes[0];
  const minimumNumberOfGuests = 2;
  const maximumNumberOfGuests = 10;
  const invalidDateErrorMessage = "Please choose a valid date";
  const invalidTimeErrorMessage = "Please choose a valid time";
  const invalidNameErrorMessage = "Please enter a valid name";
  const invalidEmailErrorMessage = "Please enter a valid email";
  const invalidNumberOfGuestsErrorMessage =
    "Please enter a number between 1 and 10";

  const [date, setDate] = useState(minimumDate);
  const [time, setTime] = useState(defaultTime);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [numberOfGuests, setNumberGuests] = useState(minimumNumberOfGuests);

  const isDateValid = () => date !== "";
  const isTimeValid = () => time !== "";
  const isNumberOfGuestsValid = () => numberOfGuests !== "";
  const isNameValid = () => typeof name === "string";
  const isEmailValid = (email) => {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return pattern.test(email);
  };

  const areAllFieldsValid = () =>
    isDateValid() &&
    isTimeValid() &&
    isNumberOfGuestsValid() &&
    isNameValid() &&
    isEmailValid();

  const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatchOnDateChange(e.target.value);
  };

  const handleTimeChange = (e) => setTime(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    submitData({ date, time, numberOfGuests, name, email, details });
  };

  return (
    <Box bg="#495E57" p={10} color="#fff">
      <form onSubmit={handleFormSubmit}>
        <FormFields
          label="Date"
          htmlFor="booking-date"
          hasError={!isDateValid()}
          errorMessage={invalidDateErrorMessage}
        >
          <Input
            type="date"
            name="booking-date"
            min={minimumDate}
            value={date}
            required={true}
            onChange={handleDateChange}
            mb={5}
          />
        </FormFields>
        <FormFields
          label="Time"
          htmlFor="booking-time"
          hasError={!isTimeValid()}
          errorMessage={invalidTimeErrorMessage}
        >
          <Select
            name="booking-time"
            value={time}
            required={true}
            onChange={handleTimeChange}
            mb={5}
          >
            {availableTimes.map((times) => (
              <option data-testid="booking-time-option" key={times}>
                {times}
              </option>
            ))}
          </Select>
        </FormFields>
        <FormFields
          label="Number of guests"
          htmlFor="booking-number-guests"
          hasError={!isNumberOfGuestsValid()}
          errorMessage={invalidNumberOfGuestsErrorMessage}
        >
          <Input
            type="number"
            name="booking-number-guests"
            value={numberOfGuests}
            min={minimumNumberOfGuests}
            max={maximumNumberOfGuests}
            required={true}
            onChange={(e) => setNumberGuests(e.target.value)}
            mb={5}
          />
        </FormFields>
        <FormFields
          label="Name"
          htmlFor="name"
          hasError={!isNameValid()}
          errorMessage={invalidNameErrorMessage}
        >
          <Input
            type="text"
            name="name"
            value={name}
            required={true}
            onChange={(e) => setName(e.target.value)}
            mb={5}
          />
        </FormFields>
        <FormFields
          label="Email"
          htmlFor="email"
          hasError={!isEmailValid()}
          errorMessage={invalidEmailErrorMessage}
        >
          <Input
            type="email"
            name="email"
            value={email}
            required={true}
            onChange={(e) => setEmail(e.target.value)}
            mb={5}
          />
        </FormFields>
        <FormFields label="Extra details? (Optional)" htmlFor="details">
          <Textarea
            name="details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            mb={5}
          />
        </FormFields>
        <Button
          type="submit"
          disabled={!areAllFieldsValid()}
          color="#495E57"
          bg="#F4CE14"
          w="100%"
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default ReservationForm;
