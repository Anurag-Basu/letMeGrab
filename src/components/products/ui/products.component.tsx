import { Button, Input, Select, Table } from "antd";
import useProducts from "../hooks/useProducts";
import "./products.component.scss";
import { AddProductForm, ProductCard } from "../..";
import { CreditCard, Table as TableIcon } from "react-feather";
import { ProductViewProps } from "../../../types";

const { Option } = Select;

const ProductView = ({ userName }: ProductViewProps) => {
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
    handleSearch,
    handleUpdateProduct,
    isCreateOrUpdate,
  } = useProducts(userName);

  return (
    <div className="relative top-[90px]">
      <AddProductForm
        createUpdateForm={createUpdateForm}
        closeCreateProductModal={closeCreateProductModal}
        isCreateProductModal={isCreateProductModal}
        onFinish={isCreateOrUpdate ? handleUpdateProduct : handleCreateProduct}
        showId={isCreateOrUpdate}
      />
      <div className="flex justify-end pr-4 mb-2 options-container">
        <Button onClick={() => showCreateProductModal()} className="mr-2">
          Add Product
        </Button>
        <Button onClick={handleSwitchView} className="mr-2">
          {isGridView ? (
            <CreditCard width={20} height={20} />
          ) : (
            <TableIcon width={20} height={20} />
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
        <Input
          onChange={handleSearch}
          name="search"
          type="text"
          className="search-box"
          placeholder="Search by Name"
        />
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
    </div>
  );
};

export default ProductView;
