import { Button, Select, Table } from "antd";
import useProducts from "../hooks/useProducts";
import "./products.component.scss";
import { AddProductForm, ProductCard } from "../..";
import { CreditCard, Hash } from "react-feather";

const { Option } = Select;

const ProductView = () => {
  const {
    allProducts,
    categories,
    onChangeCategory,
    handleSwitchView,
    isGridView,
    columns,
    dataSource,
    handleCreateProduct,
    closeCreateProductModal,
    showCreateProductModal,
    isCreateProductModal,
    createUpdateForm,
  } = useProducts();
  return (
    <>
      <AddProductForm
        createUpdateForm={createUpdateForm}
        closeCreateProductModal={closeCreateProductModal}
        isCreateProductModal={isCreateProductModal}
        onFinish={handleCreateProduct}
      />
      <h2 className="text-center">All Products</h2>
      <div className="flex justify-end pr-4 options-container">
        <Button onClick={() => showCreateProductModal()} className="mr-2">
          Add Product
        </Button>
        <Button onClick={handleSwitchView} className="mr-2">
          {isGridView ? (
            <CreditCard width={20} height={20} />
          ) : (
            <Hash width={20} height={20} />
          )}
        </Button>
        <Select defaultValue="all" onChange={onChangeCategory}>
          <Option key="all" value="all">
            All
          </Option>
          {categories?.map((cat) => {
            return (
              <Option value={cat} key={cat}>
                {cat}
              </Option>
            );
          })}
        </Select>
      </div>
      {isGridView ? (
        <div>
          <Table bordered columns={columns} dataSource={dataSource} />
        </div>
      ) : (
        <div className="flex product-container">
          {allProducts.map((product) => {
            return <ProductCard product={product} />;
          })}
        </div>
      )}
    </>
  );
};

export default ProductView;
