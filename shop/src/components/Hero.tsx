const Hero = () => {
    return (
      <section className="h-screen bg-black text-white flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl font-bold text-gold">Experience Luxury & Elegance</h1>
        <p className="text-lg text-gray-300 mt-3">Exclusive salon services for a premium feel</p>
        <button className="mt-6 bg-gold text-black px-6 py-3 rounded-lg hover:bg-red-900 hover:text-white transition">
          Book an Appointment
        </button>
      </section>
    );
  };
  
  export default Hero;
  