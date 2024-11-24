import React, { useState } from "react";
import { ClientDto, Clients } from "../../utils/types/Client";
import { createClient } from "../../utils/airtable";

const ClientForm = ({
  setClients,
}: {
  setClients: React.Dispatch<React.SetStateAction<Clients>>;
}) => {
  const [formData, setFormData] = useState<ClientDto>({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
    createClient(formData, setClients);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setFormData((previousFormData) => {
      return {
        ...previousFormData,
        [e.target.name]: e.target.value,
      };
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstname"
        placeholder="Your first name"
        required
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastname"
        placeholder="Your last name"
        required
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        placeholder="Your email"
        required
        onChange={handleChange}
      />
      <input
        type="text"
        name="phonenumber"
        placeholder="Your phone number"
        required
        onChange={handleChange}
      />
      <button type="submit">Create new client</button>
    </form>
  );
};

export default ClientForm;
