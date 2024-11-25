import React, { useState } from "react";
import { ClientDto, Clients } from "../../utils/types/Client";
import { createClient } from "../../utils/airtable";
import "../../style/ClientForm.css";

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
    createClient(formData, setClients);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((previousFormData) => ({
      ...previousFormData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <h1>Create New Client</h1>
      <div className="client-form-container">
        <form onSubmit={handleSubmit} className="client-form">
          <div className="form-group">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Your first name"
              required
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Your last name"
              required
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Your email"
              required
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phonenumber">Phone Number</label>
            <input
              type="text"
              id="phonenumber"
              name="phonenumber"
              placeholder="Your phone number"
              required
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <button type="submit" className="submit-button">
            Create new client
          </button>
        </form>
      </div>
    </div>
  );
};

export default ClientForm;
