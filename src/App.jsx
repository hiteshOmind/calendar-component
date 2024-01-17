import DatePicker from './DatePicker';
import YourComponent from "./UsePagination.jsx";
import LineStepper from "./Stepper.jsx";


// ! To use Chakra-ui-steps you need to extend the chakra theme 
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { StepsTheme as Steps } from "chakra-ui-steps";

const theme = extendTheme({
  components: {
    Steps,
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div style={{padding:30}} className="App">
        <DatePicker/>
      <br/>
      <br/>
      <br/>
      <YourComponent/>
      <br/>
      <br/>
      <br/>
        <div>
          <LineStepper variant={"simple"} />
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
