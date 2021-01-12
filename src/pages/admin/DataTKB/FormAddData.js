import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Select } from "antd";

const { Option } = Select;

export default function FormAddData() {
  const { handleSubmit, control } = useForm();
  const [data, setData] = useState(null);

  console.log("data", JSON.stringify(data, null, 2))
  return (
    <form onSubmit={handleSubmit(data => setData(data))}>
    <div>
      <section>
        <label >School  Year</label>
        <Controller
          as={
            <Select>
              <Option value={"2015-2016"}>2015-2016</Option>
              <Option value={"2016-2017"}>2016-2017</Option>
              <Option value={"2017-2018"}>2017-2018</Option>
              <Option value={"2018-2019"}>2018-2019</Option>
              <Option value={"2019-2020"}>2019-2020</Option>
              <Option value={"2020-2021"}>2020-2021</Option>
            </Select>
          }
          name="Select"
          control={control}
        />
      </section>

      <section>
        <label>Semester</label>
        <Controller
          as={
            <Select>
              <Option value={1}>I</Option>
              <Option value={2}>II</Option>
            </Select>
          }
          name="Select"
          control={control}
        />
      </section>
    </div>
  </form>
  )
}
