import { useState } from "react";
import { type MenuProps } from "antd";
import { SignInFormTypes } from "../../../types";

const useApp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");

  const handleOpenModal = () => setIsModalOpen(true);
  const handleLoginOpenModal = () => setIsLoginModalOpen(true);

  const handleCancel = () => setIsModalOpen(false);
  const handleLoginCloseModal = () => setIsLoginModalOpen(false);

  const handleLoginFormSubmit = (value: SignInFormTypes) => {
    const userPass = localStorage.getItem(value.username);
    console.log({ value, userPass });

    if (!userPass || value.password != userPass) {
      return alert("invalid username/Password");
    }
    setUserName(value.username);
    setIsLogin(true);
  };

  const items: MenuProps["items"] = [
    {
      label: "Sign In",
      key: "sing-in",
      disabled: true,
      onClick: handleLoginOpenModal,
    },
    {
      label: "Sign Up",
      key: "sign-up",
      onClick: handleOpenModal,
    },
  ];

  return {
    isModalOpen,
    handleCancel,
    items,
    setIsModalOpen,
    isLoginModalOpen,
    handleLoginOpenModal,
    handleLoginCloseModal,
    isLogin,
    handleLoginFormSubmit,
    userName,
    handleOpenModal,
  };
};

export default useApp;
