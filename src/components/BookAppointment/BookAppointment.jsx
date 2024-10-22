import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./BookAppointment.module.css";

function BookAppointment() {
  const { state } = useLocation(); // Therapist information passed as state
  const navigate = useNavigate(); // Hook to navigate to other routes

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    // Logic to handle appointment confirmation can go here.
    // For now, we'll simulate a confirmation by directly navigating to the home page.

    alert("Appointment confirmed!");

    // Redirect to home page after confirmation
    navigate("/");
  };

  return (
    <main className={styles.bookAppointmentPage}>
      <section className={styles.therapistInfo}>
        <img src={state.imageSrc} alt={`Portrait of ${state.name}`} className={styles.therapistImage} />
        <h2>{state.name}</h2>
        <p>{state.qualification}</p>
        <p>{state.role}</p>
        <p><strong>Languages:</strong> {state.languages}</p>
        <p><strong>Availability:</strong> {state.availability}</p>
        <p><strong>Experience:</strong> {state.experience}</p>
        {state.location && <p><strong>Location:</strong> {state.location}</p>}
      </section>

      <section className={styles.appointmentForm}>
        <h3>Book an Appointment</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Age:
            <input type="number" name="age" required />
          </label>
          <label>
            Mode of Session:
            <select name="sessionMode" required>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </select>
          </label>
          <label>
            Date of Appointment:
            <input type="date" name="appointmentDate" required />
          </label>
          <label>
            Available Time Slots:
            <select name="timeSlot" required>
              <option value="10am-11am">10:00 AM - 11:00 AM</option>
              <option value="11am-12pm">11:00 AM - 12:00 PM</option>
              <option value="3pm-4pm">3:00 PM - 4:00 PM</option>
              <option value="4pm-5pm">4:00 PM - 5:00 PM</option>
            </select>
          </label>
          <button type="submit">Confirm Appointment</button>
        </form>
      </section>
    </main>
  );
}

export default BookAppointment;
