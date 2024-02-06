import { DateRangePickerPopover } from "./DatePicker/DatePicker.jsx";
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
import ChatAPIG from "./palm2/ChatAPIG.jsx";
import TableComponent from "./TableComponent.jsx";
import { TableWithPagination } from "./CheckBoxTableComponent.jsx";
import TimelineComponent from "./TimelineComponent.jsx";
import LastPurchasedCard from "./LastPurchased.jsx";
import UserRelationsCard from "./UserRelationsCard.jsx";
import SegmentAssociationCard from "./SegmentAssociationCard.jsx";
import LeftFixedUserProfile from "./LeftFixedUserProfile.jsx";
import DatePicker from "react-flatpickr";
import MultiSelectComponent from "./MultiSelectComponent.jsx";
import SelectCustom from "./CustomSelect.jsx";
import SimpleDropDown from "./SimpleDropDown.jsx";
import CheckBoxFilter from "./CheckBoxFilter/CheckBoxFilter.jsx";
import SystemAttributesTablecomponent from "./systemAttributesTable/SystemAttributesTable.jsx";
import FilterPopup from "./filterPopup/FilterPopup.jsx";

const theme = extendTheme({
  components: {
    Steps,
  },
});

export const testimonials = [
  {
    name: "Ashish Rana",
    designation: "Digital Marketing Lead",
    image:
      "https://assets-global.website-files.com/657ae52dd10b96aa23c62725/6592aa5ac15a404586f9a71c_Ashish%20Rana.webp",
    rating: 5,
    description:
      "“A great platform that helped us get qualified leads & reduce no response rate. I've already recommended others to use the same.”",
  },
  {
    name: "Michael Benedict",
    designation: "Corporate Compliance Officer",
    image:
      "https://assets-global.website-files.com/657ae52dd10b96aa23c62725/6592aa88b67afefeeccebb0a_benedict.webp",
    rating: 5,
    description:
      "“Everything you need to manage your team and learn more about the organization in one amazing tool! I liked the old design but I definitely love the new one! Very friendly and easy to navigate user interface. Definitely a holistic approach.”",
  },
  {
    name: "Varsha Patil",
    designation: "Head Customer Technology",
    image:
      "https://assets-global.website-files.com/657ae52dd10b96aa23c62725/6592ab4ac996e820956d712c_Screenshot%202024-01-01%20at%2012.49.15%E2%80%AFAM-p-500.webp",
    rating: 5,
    description:
      "“With WhatsApp marketing tool we could achieve real time interaction with our valued customer. The team has demonstrated a highly adaptive and engaging approach from the beginning.”",
  },
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
    content: <BusinessInfoForm />,
  },
  {
    label: "Step 3",
    description: "Description for Step 3",
    content: <Content3 />,
  },
];

const timeLineData = [
  {
    eventName: "Event Name",
    source: "source",
    time: "11:12 AM - 17 May 2023 ",
    component: <h1>Hello I am nice Component :)</h1>,
    attributeData: [
      { attribute: "Name", attributeDetail: "Hitesh Kumar" },
      { attribute: "Name", attributeDetail: "Hitesh Kumar" },
      { attribute: "Name", attributeDetail: "Hitesh Kumar" },
    ],
  },
  {
    eventName: "Event Name",
    source: "source",
    time: "11:12 AM - 17 May 2023 ",
    component: <h1>Hello I am nice Component :)</h1>,
    attributeData: [
      { attribute: "Name", attributeDetail: "Hitesh Kumar" },
      { attribute: "Name", attributeDetail: "Hitesh Kumar" },
      { attribute: "Name", attributeDetail: "Hitesh Kumar" },
    ],
  },
  {
    eventName: "Event Name",
    source: "source",
    time: "11:12 AM - 17 May 2023 ",
    component: <h1>Hello I am nice Component :)</h1>,
    attributeData: [
      { attribute: "Name", attributeDetail: "Hitesh Kumar" },
      { attribute: "Name", attributeDetail: "Hitesh Kumar" },
      { attribute: "Name", attributeDetail: "Hitesh Kumar" },
    ],
  },
  {
    eventName: "Event Name",
    source: "source",
    time: "11:12 AM - 17 May 2023 ",
    component: <h1>Hello I am nice Component :)</h1>,
    attributeData: [
      { attribute: "Name", attributeDetail: "Hitesh Kumar" },
      { attribute: "Name", attributeDetail: "Hitesh Kumar" },
      { attribute: "Name", attributeDetail: "Hitesh Kumar" },
    ],
  },
];

function App() {
  const [selectedRange, setSelectedRange] = useState([]);
  const [editEmail, setEditEmail] = useState("hdshjjdsd@gggs.com");
  const [editLanguage, setEditLanguage] = useState("Hindi");
  const [editMobile, setEditMobile] = useState("98y873473");

  const Coloroptions = [
    {
      label: "hello",
      value: "hello",
      className: "custom-option",
      id: "text",
    },
    {
      label: "groot",
      value: "groot",
      className: "custom-option",
      id: "text",
    },
  ];

  const [multiInputValues, setMultiInputValues] = useState([]);

  const [selectedValue, setSelectedValue] = useState("This Month");
  const [options, setOptions] = useState(source);

  return (
    <ChakraProvider theme={theme}>
      <div style={{ padding: 30 }} className="App">
        {/* <DatePicker /> */}
        {/* <DateRangePickerPopover
          mode="single"
          left={true}
          selectedRange={selectedRange}
          setSelectedRange={setSelectedRange}
        /> */}
        {/* <YourComponent /> */}
        <div>
          {/* <LineStepper steps={steps} /> */}
        </div>
        {/* <LogoUploader /> */}
  
        {/* <BusinessInfoForm /> */}
  
        {/* <BusinessDeatailForm /> */}
  
        {/* <ActivateAccountForm1 /> */}
  
        {/* <ActivateAccountForm2 /> */}

        {/* <div
          style={{
            backgroundColor: "green",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >
          <CustomCarousel ratingData={testimonials} />
        </div> */}
      </div>
      {/* <ChatAPIG/> */}
      <div style={{ padding: 30 }}>
        {/* <TableWithPagination /> */}
     
        {/* <TimelineComponent TimeLineData={timeLineData} /> */}
  
        {/* <LastPurchasedCard
          productName={"Hitesh Kumar"}
          orderDate={"12 Jan 2023"}
        /> */}
     
        {/* <UserRelationsCard
          revenue={"$1235"}
          firstOrderDate={"12 Dec 2023"}
          LastOrderDate={"12 Jan 2023"}
          lastSeen={"12 Dec 2023"}
        /> */}
     
        {/* <SegmentAssociationCard
          rfmCount={1288}
          customCount={32323}
          staticCount={54654}
        /> */}
        {/* <MultiSelectComponent
          colorScheme="green"
          isClearable={false}
          useBasicStyles
          setMultiInputValues={setMultiInputValues}
          isMulti
          selectLength={1}
          multiInputValues={multiInputValues}
          options={Coloroptions}
          placeholder="Select"
        /> */}
        {/* <SelectCustom /> */}
 
        {/* <LeftFixedUserProfile
          name="Hitesh Kumar"
          mobileNumber="83076t7632"
          email="hitesh@omind.ai"
          timeZone="UTC +5:30"
          addedOn="12 Dec 2023"
          language="English"
          editEmail={editEmail}
          setEditEmail={setEditEmail}
          editMobile={editMobile}
          setEditMobile={setEditMobile}
          editLanguage={editLanguage}
          setEditLanguage={setEditLanguage}
          editing={true}
        /> */}
        <TableComponent />
        {/* <SimpleDropDown
          selectedValue={selectedValue}
          options={DWoptions}
          setSelectedValue={setSelectedValue}
        /> */}
      
        {/* <SystemAttributesTablecomponent />
        <FilterPopup />
        <SelectCustom /> */}
   
        {/* <CheckBoxFilter options={options} setOptions={setOptions} /> */}
      </div>
    </ChakraProvider>
  );
}

export default App;

const DWoptions = [
  {
    value: "This Month",
    label: "This Month",
    index: 0,
  },
  {
    value: "Last 7 Days",
    label: "Last 7 Days",
    index: 1,
  },
  {
    value: "Last 30 Days",
    label: "Last 30 Days",
    index: 2,
  },
  {
    value: "Last 90 Days",
    label: "Last 90 Days",
    index: 3,
  },
  {
    value: "Today",
    label: "Today",
    index: 4,
  },
];

const source = [
  {
    source: "Source 1",
    checked: false,
  },
  {
    source: "Source 2",
    checked: false,
  },
  {
    source: "Source 3",
    checked: false,
  },
  {
    source: "Source 4",
    checked: false,
  },
];
