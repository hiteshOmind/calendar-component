import React, { useRef, useState } from 'react'
import Flatpickr from "react-flatpickr";
import 'flatpickr/dist/flatpickr.css';
import "./DatePicker.css"
import ShortcutButtonsPlugin from 'shortcut-buttons-flatpickr';


function DatePicker() {

  const [selectedRange, setSelectedRange] = useState([]);
  const flatpickrRef = useRef(null);

  const handleDateChange = (selectedDates, dateStr, instance) => {
    setSelectedRange(selectedDates);
  };


const options = {
      enableTime: false,
      closeOnSelect:false,
      mode: 'range',
      dateFormat: 'm-d-Y',
      Plugins:[
        ShortcutButtonsPlugin({
          button: {
            label: 'Clear',
          },
          onClick: (index, fp) => {
            fp.clear();
            fp.close();
          }
        })
      ]
    };

  return (
    <div>
      <Flatpickr data-enable-time
        ref={flatpickrRef}
        value={selectedRange}
        style={{fontFamily:"Inter, sans-serif"}}
        onChange={handleDateChange}
        options={options}
        />
    </div>
  )
}

export default DatePicker



