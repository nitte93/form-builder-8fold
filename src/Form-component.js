import React from "react";

export const Radio = (props) => {
  const onChange = (e) => {
    let value = e.target.value;
    const { name } = props;
    console.log("radio", name, value);
    props.onChange(name, value);
  };
  return (
    <div>
      {props.options.map((item) => {
        return (
          <label key={item.value}>
            <input
              type="radio"
              checked={props.value === item.value}
              disabled={item.disabled}
              value={item.value}
              name={props.name}
              onChange={(name, value) => onChange(name, value)}
            />
            <span>{item.label}</span>
          </label>
        );
      })}
    </div>
  );
};

export const FieldWrapper = ({ children }) => {
  return <div className="field-wrapper">{children}</div>;
};
