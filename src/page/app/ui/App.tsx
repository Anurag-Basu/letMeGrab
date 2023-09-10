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
    productView,
    handleShowProductView,
    signInForm,
    handleLogout,
    signUpForm,
    handleSignUpForm,
  } = useApp();
  return (
    <div className="page-container">
      <Navbar
        handleLogout={handleLogout}
        handleShowProductView={handleShowProductView}
        handleOpenModal={handleOpenModal}
        handleLoginOpenModal={handleLoginOpenModal}
        isLogin={isLogin}
        productView={productView}
        userName={userName}
      />
      {productView ? (
        <ProductView />
      ) : (
        <Home
          handleSignUpForm={handleSignUpForm}
          signUpForm={signUpForm}
          signInForm={signInForm}
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
