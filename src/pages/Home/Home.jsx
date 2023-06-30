import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Menu from "../../components/Menu/Menu"


const Home = () => {
  return (
    <>
      <Header />
      <Menu />
      <div className="flex justify-center">
        <h1 className="text-fuchsia-200 text-xl ">
          Voce está na página Principal
        </h1>
      </div>
      <Footer />
    </>
  );
}

export default Home
