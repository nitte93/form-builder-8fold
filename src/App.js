import React from "react";
import { Radio, FieldWrapper } from "./Form-component";
import { Form } from "./form";

import "./styles.css";

// ['required', 'number', MAX1000, TRIMSPACE]
// Form-component =
// radio, checkbox, text

export default function App() {
  return (
    <div className="App">
      <Form
        config={{
          fields: {
            department: {
              description: "department",
              initialValue: "IT" //[IT, HR]
            },
            job_timing: {
              description: "job timing",
              initialValue: "9-6" //[IT, HR]
            },
            job_level: {
              name: "job_level",
              description: "What job level are they seeking ?",
              initialValue: "full_time", //[IT, HR]
              options: [
                { value: "full_time", label: "Full Time" },
                { value: "internship", label: "Internship" }
              ],
              validation: ["required", "number"]
            },
            location: {
              description: "Which work location do you prefer ?",
              initialValue: "Bangalore" //[IT, HR]
            }
          },
          onFormSubmit: (val) => console.log("do something", val)
        }}
      >
        {({ onSubmit, fields, onChange, onClear }) => {
          return (
            <>
              <button onClick={onClear}>Clear</button>
              <button onClick={onSubmit}>Submit</button>
              <FieldWrapper>
                {fields.job_level.description}
                <Radio
                  name={fields.job_level.name}
                  value={fields.job_level.value}
                  options={fields.job_level.options}
                  onChange={onChange}
                />
              </FieldWrapper>

              <FieldWrapper>
                {fields.location.description}
                <input onChange={onChange} name={fields.location.name} />
              </FieldWrapper>
            </>
          );
        }}
      </Form>
    </div>
  );
}
