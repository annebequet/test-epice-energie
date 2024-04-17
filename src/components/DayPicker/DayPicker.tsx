import React from 'react';

import { fr } from 'date-fns/locale';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { CustomDatePickerPropsType } from './type';

const CustomDatePicker: React.FC<CustomDatePickerPropsType> = (props) => {
  const { date, actionOnChange } = props;

  const handleChange = (
    date: Date | null,
    event: React.SyntheticEvent<any, Event> | undefined
  ) => {
      if(date) actionOnChange(date)
  }

  return (
    <div className="text-sm font-sans text-custom-gray">
      <DatePicker
        selected={date}
        onChange={handleChange}
        locale={fr}
        dateFormat="dd/MM/yyyy"
      />
    </div>
  )
};

export default CustomDatePicker;
