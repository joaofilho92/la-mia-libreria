import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex h-20 bg-pink-300 justify-between items-center px-5 sm:rounded-xl sm:m-5">
      <h1 className="text-zinc-950 text-xl  hover:text-pink-500">
        <Link to="/">
          <a href="/">La Mia Libreria</a>
        </Link>
      </h1>
      <span className="text-zinc-950 text-xl">Benvenuta Giulia!</span>
    </div>
  );
};

export default Header;
