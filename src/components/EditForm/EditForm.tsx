import { useState } from "react";
import { Status } from "../../utils/types/Client";
import "../../style/EditForm.css";

const EditForm = ({
  initialNotes,
  initialStatus,
  onSubmit,
}: {
  initialNotes: string;
  initialStatus: Status;
  onSubmit: (notes: string, status: Status) => void;
}) => {
  const [notes, setNotes] = useState(initialNotes);
  const [status, setStatus] = useState(initialStatus);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(notes, status);
  };

  return (
    <div className="container edit-form-container">
      <form onSubmit={handleSubmit} className="edit-form">
        <div className="form-group">
          <label htmlFor="notes">Notes</label>
          <input
            type="text"
            id="notes"
            name="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select
            id="status"
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value as Status)}
            className="form-control"
          >
            <option value={Status.NOT_CONTACTED}>Not Contacted</option>
            <option value={Status.CONTACTED}>Contacted</option>
            <option value={Status.CONTACT_IN_FUTURE}>Contact In Future</option>
          </select>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditForm;
