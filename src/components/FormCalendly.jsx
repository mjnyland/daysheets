import React from "react";
import { InlineWidget } from "react-calendly";

const FormCalendly = () => {
  return (
    <div className="App">
      <InlineWidget url="https://calendly.com/michael-csc/daysheets-demo"  styles={{ height: '950px', width: '800px' }}/>
    </div>
  );
};

export default FormCalendly;