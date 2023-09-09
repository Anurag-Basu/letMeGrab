/* eslint-disable @typescript-eslint/no-explicit-any */
export interface SignUpProps {
  isModalOpen: boolean;
  handleCancel: () => void;
  setIsModalOpen: any;
}

export interface SignInProps {
  isOpen: boolean;
  onFinish: (e: SignInFormTypes) => void;
  handleCancel: () => void;
}

export interface SignInFormTypes {
  username: string;
  password: string;
}

export interface FormTypes extends SignInFormTypes {
  email: string;
  confirm_password: string;
}

export interface NavbarProps {
  handleOpenModal: () => void;
  handleLoginOpenModal: () => void;
  isLogin: boolean;
  userName: string;
}

export interface HomeProps {
  isModalOpen: boolean;
  handleCancel: () => void;
  setIsModalOpen: any;
  isLoginModalOpen: boolean;
  handleLoginCloseModal: () => void;
  handleLoginFormSubmit: (val: SignInFormTypes) => void;
}

export interface ProductsType {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}

export interface DataSourceType {
  key: number;
  name: string;
  price: number;
  description: string;
  category: string;
  id?: number;
}

export interface CreateProductFields {
  name: string;
  description: string;
  price: number;
}

export interface AddProductsFormProps {
  onFinish: (val: CreateProductFields) => void;
  closeCreateProductModal: () => void;
  isCreateProductModal: boolean;
  createUpdateForm: any;
}