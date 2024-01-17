import DatePicker from "./DatePicker";
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

const Content1 = () => <h1>Hello, I am content 1</h1>;

const Content2 = () => <h1>Hello, I am content 2</h1>;

const Content3 = () => <h1>Hello, I am content 3</h1>;

const steps = [
  {
    label: "Step 1",
    description: "Description for Step 1",
    content: <Content1 />,
  },
  {
    label: "Step 2",
    description: "Description for Step 2",
    content: <Content2 />,
  },
  {
    label: "Step 3",
    description: "Description for Step 3",
    content: <Content3 />,
  },
];

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div style={{ padding: 30 }} className="App">
        <DatePicker />
        <br />
        <br />
        <br />
        <YourComponent />
        <br />
        <br />
        <br />
        <div>
          <LineStepper steps={steps} />
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
