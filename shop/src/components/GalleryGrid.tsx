const GalleryGrid = () => {
    return (
      <section className="bg-black text-white p-8 text-center">
        <h2 className="text-4xl text-gold font-bold">Our Work</h2>
        <div className="grid grid-cols-3 gap-4 mt-6">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div key={num} className="bg-gray-800 h-40 rounded-lg"></div>
          ))}
        </div>
      </section>
    );
  };
  
  export default GalleryGrid;
  