import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import Hero from "./components/Hero";
import Specials from "./components/Specials";
import About from "./components/About";
import Reservations from "./components/Reservation";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header />
          <Hero />
          <Specials />
          <About />
          <Reservations />
          {/* <ContactMeSection /> */}
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
