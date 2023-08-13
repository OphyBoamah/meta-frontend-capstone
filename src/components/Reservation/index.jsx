import { useReducer } from "react";
import { fetchAPI, submitAPI } from "../../utils/fakeAPI";
import ReservationForm from "./ReservationForm";
import { Alert, AlertIcon, Box, Heading } from "@chakra-ui/react";

const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return response.length !== 0 ? response : availableTimes;
};

const initializeTimes = (initialAvailableTimes) => [
  ...initialAvailableTimes,
  ...fetchAPI(new Date()),
];

const Reservations = () => {
  const [availableTimes, dispatchOnDateChange] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );
  // const navigate = useNavigate();

  const submitData = (formData) => {
    const response = submitAPI(formData);
    if (response) {
      alert("Reservation confirmed. See you soon!");
    }
  };

  return (
    <Box className="bookings" py={14} w="50%" margin="0 auto" id="reservation">
      <Heading as="h1" fontSize="4xl" textAlign="center" mb={6}>
        Reserve a Table
      </Heading>
      <ReservationForm
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatchOnDateChange}
        submitData={submitData}
      />
    </Box>
  );
};

export default Reservations;
