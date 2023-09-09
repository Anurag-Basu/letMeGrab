import "./App.scss";
import useApp from "../hooks/useApp";
import { Home, Navbar, ProductView } from "../../../components";

function App() {
  const {
    isModalOpen,
    handleCancel,
    setIsModalOpen,
    isLoginModalOpen,
    handleLoginCloseModal,
    handleLoginFormSubmit,
    handleOpenModal,
    handleLoginOpenModal,
    isLogin,
    userName,
  } = useApp();
  const products = false;
  return (
    <div className="page-container">
      <Navbar
        handleOpenModal={handleOpenModal}
        handleLoginOpenModal={handleLoginOpenModal}
        isLogin={isLogin}
        userName={userName}
      />
      {products ? (
        <ProductView />
      ) : (
        <Home
          isModalOpen={isModalOpen}
          handleCancel={handleCancel}
          setIsModalOpen={setIsModalOpen}
          isLoginModalOpen={isLoginModalOpen}
          handleLoginCloseModal={handleLoginCloseModal}
          handleLoginFormSubmit={handleLoginFormSubmit}
        />
        
      )}
    </div>
  );
}

export default App;
