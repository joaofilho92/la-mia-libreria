import { Link } from "react-router-dom";


const Menu = () => {
  return (
    <div className="flex justify-center gap-5 sm: p-3 ">
      <Link to="/cadastro">
        <a
          href="/cadastro"
          className="text-fuchsia-200 text-xl hover:text-pink-300 font-bold"
        >
          Nuovo
        </a>
      </Link>

      <Link to="/minhacolecao">
        <a
          href="/minhacolecao"
          className="text-fuchsia-200 text-xl  hover:text-pink-300 font-bold"
        >
          Collezione
        </a>
      </Link>

      <Link to="/lidos">
        <a
          href="lidos"
          className="text-fuchsia-200 text-xl  hover:text-pink-300 font-bold"
        >
          Letti
        </a>
      </Link>

      <Link to="/paraler">
        <a
          href="paraler"
          className="text-fuchsia-200 text-xl  hover:text-fuchsia-500 font-bold"
        >
          In Lettura
        </a>
      </Link>

      <Link to="/paraler">
        <a
          href="paraler"
          className="text-fuchsia-200 text-xl  hover:text-fuchsia-500 font-bold"
        >
          Non Letti
        </a>
      </Link>
    </div>
  );
};

export default Menu;
