import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header"
import Menu from "../../components/Menu/Menu"


const MinhaColecao = () => {
  return (
    <>
      <Header />
      <Menu />
      <div className="flex justify-center">
        <h1 className="text-fuchsia-200 text-xl ">
          Você está na Página da minha coleção!
        </h1>
      </div>
      <Footer/>
    </>
  );
}

export default MinhaColecao
