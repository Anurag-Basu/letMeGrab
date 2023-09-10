import { NavbarProps } from "../../../types";
import Logo from "../../../assets/Logo.png";
import { Anchor, Button } from "antd";
import { User } from "react-feather";

const Navbar = (props: NavbarProps) => {
  const {
    handleOpenModal,
    handleLoginOpenModal,
    isLogin,
    userName,
    handleShowProductView,
    productView,
    handleLogout,
  } = props;

  const items = [
    {
      key: "home",
      href: "#home",
      title: "Home",
    },
    {
      key: "part-2",
      href: "#about",
      title: "About",
    },
    {
      key: "part-3",
      href: "#service",
      title: "Service",
    },
    {
      key: "part-4",
      href: "#faq",
      title: "FAQ",
    },
    {
      key: "part-5",
      href: "#contact",
      title: "Contact Us",
    },
  ];
  return (
    <div
      className={`${
        isLogin ? "justify-between" : ""
      } fixed top-0 mb-[80px] z-50 flex flex-row items-center w-full p-5 bg-blue-950`}
    >
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-10 mr-2 w-30" />
      </div>
      {!isLogin || !productView ? (
        <div className="flex items-center justify-center flex-grow text-white">
          <Anchor className="text-white" direction="horizontal" items={items} />
        </div>
      ) : (
        <></>
      )}

      <div className="flex items-center justify-end">
        {isLogin ? (
          <>
            <div className="flex items-center justify-center text-white">
              {" "}
              <User size={20} className="mr-1" /> {userName.toUpperCase()}
            </div>
            <Button
              onClick={handleShowProductView}
              type="text"
              className="bg-transparent btn"
            >
              Products
            </Button>
            <Button
              onClick={handleLogout}
              className="bg-transparent btn"
              type="text"
            >
              LogOut
            </Button>
          </>
        ) : (
          <>
            <Button
              onClick={handleLoginOpenModal}
              className="bg-transparent btn"
              type="text"
            >
              SignIn
            </Button>
            <Button
              onClick={handleOpenModal}
              className="bg-transparent btn"
              type="text"
            >
              SignUp
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
