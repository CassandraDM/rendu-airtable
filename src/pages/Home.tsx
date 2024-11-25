import { useState } from "react";
import ClientForm from "../components/ClientForm/ClientForm";
import { Client } from "../utils/types/Client";

function Home() {
  const [clients, setClients] = useState<Client[]>([]);
  return (
    <div className="container">
      <ClientForm setClients={setClients} />
    </div>
  );
}

export default Home;
