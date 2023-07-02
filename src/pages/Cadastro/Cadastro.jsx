import Header from "../../components/Header/Header"
import Menu from "../../components/Menu/Menu"
// import Footer from "../../components/Footer/Footer";

const Cadastro = () => {
  return (
    <div>
      <Header />
      <Menu />
      <div className="flex justify-center h-96 mx-auto w-6/12  bg-pink-300 mt-5 rounded-lg">
        <div className="mt-2 flex text-zinc-950 text-xl font-bold">
          <h1>Registra i tuoi libri preferiti</h1>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Cadastro
