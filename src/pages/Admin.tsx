import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Chip from "../components/Chip/Chip";
import { getClients } from "../utils/airtable";
import deleteClient from "../utils/airtable/deleteClient";
import { Clients } from "../utils/types/Client";
import "../style/Admin.css"; // Assuming you have a CSS file for styling

function Admin() {
  const [clients, setClients] = useState<Clients>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getClients(setClients);
  }, []);

  const handleDelete = async (id: string) => {
    await deleteClient(id);
    setClients((prevClients) =>
      prevClients.filter((client) => client.id !== id)
    );
  };

  const goToEditPage = (id: string) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="container">
      <h1>Client List</h1>
      <div className="client-list">
        {clients.map((client) => (
          <div key={client.id} className="client-item">
            <div className="client-info">
              <span>
                Name: {client.firstname} {client.lastname}
              </span>
              <span>Email: {client.email}</span>
              <span>Phone: {client.phonenumber}</span>
              <span>Notes: {client.notes ? client.notes : "no notes"}</span>
              <Chip status={client.status} />
            </div>
            <div className="client-actions">
              <button
                onClick={() => handleDelete(client.id)}
                className="delete-button"
              >
                Delete
              </button>
              <button
                onClick={() => goToEditPage(client.id)}
                className="edit-button"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;
