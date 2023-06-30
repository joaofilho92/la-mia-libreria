import Header from "../../components/Header/Header"
import Menu from "../../components/Menu/Menu"
import Footer from "../../components/Footer/Footer";

const Cadastro = () => {
  return (
    <div>
      <Header />
      <Menu />
      <div className="flex justify-center">
        <h1 className="text-fuchsia-200 text-xl">
          Você está na página de Cadastro!
        </h1>
      </div>
      <Footer />
    </div>
  );
}

export default Cadastro
