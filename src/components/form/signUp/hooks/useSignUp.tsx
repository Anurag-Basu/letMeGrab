/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "antd/es/form/Form";
import { FormTypes } from "../../../../types";

const useSignUp = (setIsModalOpen: any) => {
  const [form] = useForm();

  const handleSignUpForm = (formData: FormTypes) => {
    if (formData.password === formData.confirm_password) {
      // Store user data in local storage
      localStorage.setItem(formData.username, formData.password);
      setIsModalOpen?.(false);
      alert("Signup successful!");
    } else {
      alert("Passwords do not match.");
    }
  };

  return { form, handleSignUpForm };
};

export default useSignUp;
