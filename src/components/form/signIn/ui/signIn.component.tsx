import { Button, Form, Input, Modal } from "antd";
import { SignInProps } from "../../../../types";

const SignIn = ({
  isOpen,
  handleCancel,
  onFinish,
  signInForm,
}: SignInProps) => {
  return (
    <Modal
      title="Sign In"
      open={isOpen}
      onCancel={handleCancel}
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button
          key="submit"
          htmlType="submit"
          form="sing-in-form"
          type="primary"
        >
          Login
        </Button>,
      ]}
    >
      <Form
        form={signInForm}
        onFinish={onFinish}
        name="signin-form"
        id="sing-in-form"
        layout="vertical"
      >
        <Form.Item
          name="username"
          key="username"
          label="UserName"
          rules={[{ required: true }]}
        >
          <Input type="text" />
        </Form.Item>

        <Form.Item
          name="password"
          key="password"
          label="Password"
          rules={[{ required: true }]}
        >
          <Input type="password" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SignIn;
