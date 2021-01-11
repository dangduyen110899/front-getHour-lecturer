import { ErrorMessage } from "@hookform/error-message";
import React, { useState, useEffect, useMemo,useCallback } from "react";

const TextInput = ({
  values,
  label,
  style,
  checked,
  name,
  placeholder,
  errors,
  validate,
  register,
  type,
  className,
  id,
  classLabel,
  index
}) => {
  const [textValue, setValue] = useState();
  const [check, setCheck] = useState('');
  const [validateDate, setValidateDate] = useState(false);
  const [validateBirthDay, setValidateDateBirthDay] = useState(false);
  const dateNow = new Date();

  useEffect(() => {
    values && setValue(values);
    checked && setCheck(checked);
  }, [values, checked]);

  const handleOnChange = (e) => {
    const s_value = e.target.value
    const value = new Date(s_value);
      if (e.target.type == "date" && name !== "birthDay" && index>-1) {
        if (dateNow.getTime() > value.getTime()) {
          setValidateDate(true);
        } else {
          setValidateDate(false);
          setValue(s_value);
          // handleCheckTime(e, value, s_value)
        }

      } else if (e.target.type==="password"|| name==="password") {
        setValue(s_value.replace(/ +/g, ""));
      } else if (name==="birthDay") {
        if (dateNow.getTime()-value.getTime()>504946360335) {
          setValidateDateBirthDay(false)
          setValue(s_value);
        }
        else {
          setValidateDateBirthDay(true)
          setValue('');
        }
      } else {
        setValue(s_value);
      }
  };

  return (
    <>
      {useMemo(() => {
        return (
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            className={className}
            value={textValue}
            id={id}
            style={style}
            onChange={(e) => handleOnChange(e)}
            checked={check}
            ref={register(validate)}
          />
        );
      }, [check,textValue,type])}

      <label className={classLabel} htmlFor={id}>
        {label}
      </label>

      {validateDate && (
        <span style={{ color: "red", fontSize: "12px" }}>
          Please don't choose date previous today
        </span>
      )}

      {validateBirthDay && (
        <span style={{ color: "red", fontSize: "12px" }}>
          Age must more than 16.
        </span>
      )}

      <ErrorMessage
        errors={errors}
        name={name}
        as="label"
        className="form__email-validate mb-1"
      />
    </>
  );
};

export default TextInput;
