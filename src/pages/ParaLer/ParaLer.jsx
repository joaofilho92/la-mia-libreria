import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";


const ParaLer = () => {
  return (
    <>
      <Header />
      <Menu />
      <div className="flex justify-center">
        <h1 className="text-fuchsia-200 text-xl ">
          Você está na Página de Livros para ler!
        </h1>
      </div>
      <Footer />
    </>
  );
}

export default ParaLer
