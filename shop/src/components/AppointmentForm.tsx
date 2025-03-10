import { useState } from "react";

const AppointmentForm = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Appointment booked for", name);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-black text-white p-6 rounded-lg shadow-lg"
    >
      <h3 className="text-gold text-2xl font-bold">Book an Appointment</h3>
      <input
        type="text"
        placeholder="Your Name"
        className="mt-4 w-full p-2 rounded-lg bg-gray-800 text-white"
        onChange={(e) => setName(e.target.value)}
      />
      <button
        type="submit"
        className="mt-4 bg-gold text-black px-4 py-2 rounded-lg hover:bg-red-900 hover:text-white transition"
      >
        Submit
      </button>
    </form>
  );
};

export default AppointmentForm;
