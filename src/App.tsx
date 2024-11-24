import { useEffect, useState } from "react";
import "./App.css";
import { getClients } from "./utils/airtable";
import { Clients } from "./utils/types/Client";
import Chip from "./components/Chip/Chip";
import ClientForm from "./components/ClientForm/ClientForm";

function App() {
  const [clients, setClients] = useState<Clients>([]);
  useEffect(() => {
    getClients(setClients);
  }, []);

  return (
    <div>
      Hello Airtable application
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            ID : {client.id} - {client.firstname} {client.lastname} -{" "}
            {client.email} - {client.phonenumber} -{" "}
            <Chip status={client.status} />
          </li>
        ))}
      </ul>
      <ClientForm setClients={setClients} />
    </div>
  );
}

export default App;
