/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import {
  CreateProductFields,
  DataSourceType,
  ProductsType,
} from "../../../types";
import { createDataSource } from "../functions/createDataSource";
import { ColumnsType } from "antd/es/table";
import { Button } from "antd";
import { Edit, Eye, Trash2 } from "react-feather";
import { useForm } from "antd/es/form/Form";
import { toast } from "react-toastify";

const useProducts = () => {
  const [createUpdateForm] = useForm();

  const [categories, setCategories] = useState<string[]>([]);
  const [allProducts, setAllProducts] = useState<ProductsType[]>([]);
  const [products, setProducts] = useState<ProductsType[]>([]);
  const [isGridView, setIsGridView] = useState<boolean>(false);
  const [dataSource, setDataSource] = useState<DataSourceType[]>([]);
  const [isCreateProductModal, setIsCreateProductModal] =
    useState<boolean>(false);
  const [updateProductId, setUpdateProductId] = useState<number>();

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
    axios
      .delete(`https://fakestoreapi.com/products/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  //   const handleUpdateProduct = (id: number) => {
  console.log(updateProductId);
  //     axios
  //       .put(`https://fakestoreapi.com/products/${id}`)
  //       .then((res) => console.log(res))
  //       .catch((err) => console.log(err));
  //   };

  const onChangeCategory = (value: string) => {
    let url = `https://fakestoreapi.com/products/category/${value}`;

    if (value === "all") {
      url = "https://fakestoreapi.com/products";
    }
    axios.get(url).then((res) => {
      console.log(value, res);
      setAllProducts(res.data);
      setProducts(res.data);
      setDataSource(createDataSource(res.data));
    });
  };

  const handleSwitchView = () => {
    setIsGridView((prev) => !prev);
  };

  const showCreateProductModal = (id?: number) => {
    if (id) {
      setUpdateProductId(id - 1);
      createUpdateForm.setFieldsValue({
        name: allProducts[id - 1].title,
        price: allProducts[id - 1].price,
        description: allProducts[id - 1].description,
      });
    }
    setIsCreateProductModal(true);
  };
  const closeCreateProductModal = () => {
    setIsCreateProductModal(false);
    createUpdateForm.resetFields();
  };

  const handleCreateProduct = (values: CreateProductFields) => {
    console.log({ values });
    axios
      .post("https://fakestoreapi.com/products", values)
      .then((response) => {
        console.log(response);
        toast.success("Product Created");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error?.code);
      });
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const filteredData = products.filter((ele) =>
      ele.title.toLowerCase().includes(value)
    );
    setAllProducts(filteredData);
    setDataSource(createDataSource(filteredData));
  };

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setAllProducts(res.data);
      setProducts(res.data);

      console.log(res);

      setDataSource(createDataSource(res.data));
    });
    axios.get("https://fakestoreapi.com/products/categories").then((res) => {
      setCategories(res.data);
    });
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
  };
};

export default useProducts;
