/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import {
  CreateProductFields,
  DataSourceType,
  ProductsType,
  UserDataInterface,
} from "../../../types";
import { createDataSource } from "../functions/createDataSource";
import { ColumnsType } from "antd/es/table";
import { Button } from "antd";
import { Edit, Eye, Trash2 } from "react-feather";
import { useForm } from "antd/es/form/Form";
import { toast } from "react-toastify";

const useProducts = (userName: string) => {
  const [createUpdateForm] = useForm();

  const [categories, setCategories] = useState<string[]>([]);
  const [allProducts, setAllProducts] = useState<ProductsType[]>([]);
  const [products, setProducts] = useState<UserDataInterface>({
    password: "",
    products: [],
  });
  const [isGridView, setIsGridView] = useState<boolean>(false);
  const [dataSource, setDataSource] = useState<DataSourceType[]>([]);
  const [isCreateProductModal, setIsCreateProductModal] =
    useState<boolean>(false);
  const [isCreateOrUpdate, setIsCreateOrUpdate] = useState<boolean>(false);

  const columns: ColumnsType<DataSourceType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price ($)",
      dataIndex: "price",
      key: "price",
      width: 100,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "category",
      dataIndex: "category",
      key: "category",
      width: 150,
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: 200,
      render: (_, record: { key: React.Key }) => (
        <div>
          <Button
            className="mr-2"
            type="text"
            onClick={handleSwitchView}
            icon={<Eye size={20} color="#54B8FF" />}
          />

          <Button
            className="mr-2"
            type="text"
            onClick={() => showCreateProductModal(Number(record.key))}
            icon={<Edit size={20} color="green" />}
          />
          <Button
            onClick={() => handleDeleteProduct(Number(record.key))}
            type="text"
            icon={<Trash2 size={20} color="red" />}
          />
        </div>
      ),
    },
  ];

  const handleDeleteProduct = (id: number) => {
    // Since we cannot perform updates, deletions, and additions to products in the given API,
    //  that's why I'm using localStorage to achieve those tasks.
    // axios
    //   .delete(`https://fakestoreapi.com/products/${id}`)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
    const remainingProducts: UserDataInterface = {
      password: products.password,
      products: products.products.filter((product) => product.id != id),
    };
    localStorage.setItem(userName, JSON.stringify(remainingProducts));
    setDataFirstTimeLanding();
    toast.success("Product Deleted");
  };

  const handleUpdateProduct = (values: CreateProductFields) => {
    if (values.id) {
      const index = products.products.findIndex(
        (product) => product.id === values.id
      );
      console.log(values.id, index);

      const selectedProduct = {
        ...products.products[index],
        title: values.name as string,
        description: values.description,
        price: values.price,
      };

      const updatedProducts = { ...products };
      updatedProducts.products[index] = selectedProduct;

      localStorage.setItem(userName, JSON.stringify(updatedProducts));
      setDataFirstTimeLanding();
      closeCreateProductModal();
      toast.success("Product Updated Successful!");
    }
    // axios
    //   .put(`https://fakestoreapi.com/products/${id}`)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
  };
  console.log({ allProducts });
  const onChangeCategory = (value: string) => {
    let url = `https://fakestoreapi.com/products/category/${value}`;

    if (value === "all") {
      url = "https://fakestoreapi.com/products";
    }
    axios.get(url).then((res) => {
      setAllProducts(res.data);
      // setProducts(res.data);
      setDataSource(createDataSource(res.data));
    });
  };

  const handleSwitchView = () => {
    setIsGridView((prev) => !prev);
  };

  const showCreateProductModal = (id?: number) => {
    if (id) {
      const index = products.products.findIndex((product) => product.id === id);
      setIsCreateOrUpdate(true);
      createUpdateForm.setFieldsValue({
        name: allProducts[index].title,
        price: allProducts[index].price,
        description: allProducts[index].description,
        id: allProducts[index].id,
      });
    }
    setIsCreateProductModal(true);
  };
  const closeCreateProductModal = () => {
    setIsCreateProductModal(false);
    setIsCreateOrUpdate(false);
    createUpdateForm.resetFields();
  };

  const handleCreateProduct = (values: CreateProductFields) => {
    // Since we cannot perform updates, deletions, and additions to products in the given API,
    //  that's why I'm using localStorage to achieve those tasks.

    // axios
    //   .post("https://fakestoreapi.com/products", values)
    //   .then((response) => {
    //     console.log(response);
    //     toast.success("Product Created");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     toast.error(error?.code);
    //   });

    const newProduct = {
      id: products?.products?.length + 1,
      title: values.name,
      ...values,
    };

    delete newProduct.name;
    const updatedData = {
      password: products.password,
      products: [...products.products, newProduct],
    };
    localStorage.setItem(userName, JSON.stringify(updatedData));
    setDataFirstTimeLanding();
    // closeCreateProductModal();
    toast.success("Product Created Successful!");
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const filteredData = products.products.filter((ele) =>
      ele.title.toLowerCase().includes(value)
    );
    setAllProducts(filteredData);
    setDataSource(createDataSource(filteredData));
  };

  const setDataFirstTimeLanding = () => {
    // Since we cannot perform updates, deletions, and additions to products in the given API,

    const userData: UserDataInterface = JSON.parse(
      localStorage.getItem(userName) as string
    );
    setAllProducts(userData.products);
    setProducts(userData);
    setDataSource(createDataSource(userData.products));

    axios.get("https://fakestoreapi.com/products/categories").then((res) => {
      setCategories(res.data);
    });
  };

  useEffect(() => {
    // Since we cannot perform updates, deletions, and additions to products in the given API,
    //  that's why I'm using localStorage to achieve those tasks.

    // axios.get("https://fakestoreapi.com/products").then((res) => {
    //   setAllProducts(res.data);
    //   setProducts(res.data);

    //   console.log({ res, userName });

    //   setDataSource(createDataSource(res.data));
    // });
    setDataFirstTimeLanding();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    closeCreateProductModal,
    showCreateProductModal,
    isCreateProductModal,
    allProducts,
    onChangeCategory,
    categories,
    handleSwitchView,
    isGridView,
    columns,
    dataSource,
    handleCreateProduct,
    createUpdateForm,
    handleSearch,
    handleUpdateProduct,
    isCreateOrUpdate,
  };
};

export default useProducts;
