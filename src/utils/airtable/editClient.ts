import { Status, Clients } from "../types/Client";
import connectAirtable from "./connect";

const editClient = (
  id: string,
  notes: string,
  status: Status,
  setClients: React.Dispatch<React.SetStateAction<Clients>>
) => {
  const base = connectAirtable();
  const TABLE_NAME = "Table 1";
  const table = base(TABLE_NAME);

  table.update(
    [
      {
        id,
        fields: {
          notes,
          status,
        },
      },
    ],
    (error, records) => {
      if (error) {
        console.error(error);
      }
      if (!records) {
        return;
      }
      setClients((previousClients) => {
        return previousClients.map((client) => {
          if (client.id === id) {
            return {
              ...client,
              notes,
              status,
            };
          }
          return client;
        });
      });
    }
  );
};

export default editClient;
