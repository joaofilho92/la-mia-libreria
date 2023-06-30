import { Link } from "react-router-dom";


const Menu = () => {
  return (
    <div className="flex justify-center gap-5 sm: p-3 ">
      <Link to="/cadastro">
        <a
          href="/cadastro"
          className="text-fuchsia-200 text-xl hover:text-pink-300"
        >
          Nuovo 
        </a>
      </Link>

      <Link to="/minhacolecao">
        <a
          href="/minhacolecao"
          className="text-fuchsia-200 text-xl  hover:text-pink-300"
        >
          Collezione
        </a>
      </Link>

      <Link to="/lidos">
        <a
          href="lidos"
          className="text-fuchsia-200 text-xl  hover:text-pink-300"
        >
          Letti
        </a>
      </Link>

      <Link to="/paraler">
        <a
          href="paraler"
          className="text-fuchsia-200 text-xl  hover:text-fuchsia-500"
        >
          In Lettura
        </a>
      </Link>

      <Link to="/paraler">
        <a
          href="paraler"
          className="text-fuchsia-200 text-xl  hover:text-fuchsia-500"
        >
          Non Letti
        </a>
      </Link>
    </div>
  );
};

export default Menu;
