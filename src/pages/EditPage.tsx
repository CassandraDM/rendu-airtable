import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EditForm from "../components/EditForm/EditForm";
import { getClients } from "../utils/airtable";
import editClient from "../utils/airtable/editClient";
import { Client, Clients } from "../utils/types/Client";

function EditPage() {
  const { id } = useParams<{ id: string }>();
  const [clients, setClients] = useState<Clients>([]);
  const [client, setClient] = useState<Client | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    getClients(setClients);
  }, []);

  useEffect(() => {
    if (clients.length > 0 && id) {
      const foundClient = clients.find((client) => client.id === id);
      setClient(foundClient || null);
    }
  }, [clients, id]);

  const handleEdit = (notes: string, status: string) => {
    if (client) {
      editClient(client.id, notes, status as any, setClients);
      navigate("/admin");
    }
  };

  return (
    <div className="container">
      <h1>Edit</h1>
      {client && (
        <EditForm
          initialNotes={client.notes}
          initialStatus={client.status}
          onSubmit={handleEdit}
        />
      )}
    </div>
  );
}

export default EditPage;
