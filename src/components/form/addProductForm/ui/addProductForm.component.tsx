import { Button, Form, Input, Modal } from "antd";
import { AddProductsFormProps } from "../../../../types";
import TextArea from "antd/es/input/TextArea";

const AddProductForm = ({
  onFinish,
  closeCreateProductModal,
  isCreateProductModal,
  createUpdateForm,
  showId,
}: AddProductsFormProps) => {
  return (
    <Modal
      open={isCreateProductModal}
      title="Add Product"
      onCancel={closeCreateProductModal}
      footer={[
        <Button key="cancel" onClick={closeCreateProductModal}>
          Cancel
        </Button>,
        <Button
          key="submit"
          htmlType="submit"
          form="create-product-form"
          type="primary"
        >
          Add
        </Button>,
      ]}
    >
      <Form
        form={createUpdateForm}
        name="create-product"
        onFinish={onFinish}
        id="create-product-form"
        layout="vertical"
      >
        <Form.Item
          name="name"
          key="name"
          label="Product Name"
          rules={[{ required: true }]}
        >
          <Input type="text" />
        </Form.Item>
        <Form.Item
          name="price"
          key="price"
          label="Product Price ($)"
          rules={[{ required: true }]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          name="description"
          key="description"
          label="Product Description"
          rules={[{ required: true }]}
        >
          <TextArea />
        </Form.Item>
        {showId && (
          <Form.Item name="id" hidden>
            <Input type="number" />
          </Form.Item>
        )}
      </Form>
    </Modal>
  );
};

export default AddProductForm;
