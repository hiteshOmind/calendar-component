import { DateRangePickerPopover } from "./DatePicker";
import YourComponent from "./UsePagination.jsx";
import LineStepper from "./Stepper.jsx";

// ! To use Chakra-ui-steps you need to extend the chakra theme
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { StepsTheme as Steps } from "chakra-ui-steps";
import CustomCarousel from "./Testimonial.jsx";
import LogoUploader from "./DragAndDropBox.jsx";
import BusinessInfoForm from "./BusinessInfoForm.jsx";
import BusinessDeatailForm from "./BusinessDetailsForm.jsx";
import ActivateAccountForm1 from "./ActivateAccount1.jsx";
import ActivateAccountForm2 from "./ActivateAccount2.jsx";
import { useState } from "react";
import SideBannerSignUp from "./testComponent.jsx";

const theme = extendTheme({
  components: {
    Steps,
  },
});


export const testimonials = [
  {
    name: 'Ashish Rana',
    designation: 'Digital Marketing Lead',
    image: 'https://assets-global.website-files.com/657ae52dd10b96aa23c62725/6592aa5ac15a404586f9a71c_Ashish%20Rana.webp',
    rating: 4,
    description: "“A great platform that helped us get qualified leads & reduce no response rate. I've already recommended others to use the same.”"
  },
  {
    name: 'Michael Benedict',
    designation: 'Corporate Compliance Officer',
    image: 'https://assets-global.website-files.com/657ae52dd10b96aa23c62725/6592aa88b67afefeeccebb0a_benedict.webp',
    rating: 5,
    description: "“Everything you need to manage your team and learn more about the organization in one amazing tool! I liked the old design but I definitely love the new one! Very friendly and easy to navigate user interface. Definitely a holistic approach.”"
  },
  {
    name: 'Varsha Patil',
    designation: 'Head Customer Technology',
    image: "https://assets-global.website-files.com/657ae52dd10b96aa23c62725/6592ab4ac996e820956d712c_Screenshot%202024-01-01%20at%2012.49.15%E2%80%AFAM-p-500.webp",
    rating: 4,
    description: "“With WhatsApp marketing tool we could achieve real time interaction with our valued customer. The team has demonstrated a highly adaptive and engaging approach from the beginning.”"
  }
];


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
  const [selectedRange, setSelectedRange] = useState([])

  return (
    <ChakraProvider theme={theme}>

      <div style={{ padding: 30 }} className="App">
        {/* <DatePicker /> */}
        <br />
        <br />
        <DateRangePickerPopover selectedRange={selectedRange} setSelectedRange={setSelectedRange}/>
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
        <br />
        <br />
        <LogoUploader/>
        <br />
        <br />
        <BusinessInfoForm/>
        <br />
        <br/>
        <BusinessDeatailForm/>
        <br />
        <br/>
        <ActivateAccountForm1/>
        <br />
        <br/>
        <ActivateAccountForm2/>
        <br />
        <br/>
        <div style={{backgroundColor:"green", paddingTop:"20px", paddingBottom:"20px"}}>
          <CustomCarousel ratingData={testimonials}/>
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
