import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [form, setForm] = useState(initialState);

  const handleChange = (ev) => {
    const { name, value } = ev.target;

    setForm({
      ...form,
      [name]: name === "tags" ? value.split(",") : value
    });
  };

 

  return {
    form,
    handleChange
  };
};