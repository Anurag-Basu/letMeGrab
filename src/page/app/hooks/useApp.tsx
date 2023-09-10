import { useState } from "react";
import { FormTypes, SignInFormTypes } from "../../../types";
import { useForm } from "antd/es/form/Form";
import { toast } from "react-toastify";

const useApp = () => {
  const [signInForm] = useForm();
  const [signUpForm] = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");
  const [productView, setProductView] = useState<boolean>(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleLoginOpenModal = () => setIsLoginModalOpen(true);

  const handleCancel = () => {
    setIsModalOpen(false);
    signUpForm.resetFields();
  };
  const handleLoginCloseModal = () => {
    setIsLoginModalOpen(false);
    signInForm.resetFields();
  };

  const handleLoginFormSubmit = (value: SignInFormTypes) => {
    const userPass = localStorage.getItem(value.username);
    console.log({ value, userPass });

    if (!userPass || value.password != userPass) {
      return toast.error("invalid username/Password");
    }
    signInForm.resetFields();
    setIsLoginModalOpen(false);
    setUserName(value.username);
    setIsLogin(true);
    toast.success("Login Successful!");
  };

  const handleShowProductView = () => {
    setProductView((prev) => !prev);
  };

  const handleLogout = () => {
    setIsLogin(false);
    setProductView(false);
  };

  const handleSignUpForm = (formData: FormTypes) => {
    if (formData.password === formData.confirm_password) {
      // Store user data in local storage
      localStorage.setItem(formData.username, formData.password);
      setIsModalOpen?.(false);
      signUpForm.resetFields();
      toast.success("Signup successful!");
    } else {
      toast.warning("Passwords do not match.");
    }
  };

  return {
    isModalOpen,
    handleCancel,
    setIsModalOpen,
    isLoginModalOpen,
    handleLoginOpenModal,
    handleLoginCloseModal,
    isLogin,
    handleLoginFormSubmit,
    userName,
    handleOpenModal,
    productView,
    handleShowProductView,
    signInForm,
    handleLogout,
    signUpForm,
    handleSignUpForm,
  };
};

export default useApp;
