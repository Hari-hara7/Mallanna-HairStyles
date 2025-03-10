import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-gold py-4 px-6 flex justify-between items-center fixed top-0 w-full z-50 shadow-lg">
      <h1 className="text-3xl font-bold">Mallanna Salon</h1>
      <ul className="flex gap-6">
        {["Home", "About", "Services", "Gallery", "Products", "Contact"].map(
          (item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase()}`}
                className="hover:text-red-900 transition"
              >
                {item}
              </Link>
            </li>
          )
        )}
      </ul>
      <Link
        to="/signin"
        className="bg-gold text-black px-4 py-2 rounded-lg hover:bg-red-900 hover:text-white transition"
      >
        Sign In
      </Link>
    </nav>
  );
};

export default Navbar;
