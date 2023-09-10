import { Button, Form, Input, Modal } from "antd";
import { SignUpProps } from "../../../../types";

const SignUp = ({
  isModalOpen,
  signUpForm,
  handleCancel,
  handleSignUpForm,
}: SignUpProps) => {
  return (
    <div>
      <Modal
        title="Sign Up"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            key="submit"
            htmlType="submit"
            form="sing-up-form"
            type="primary"
          >
            Submit
          </Button>,
        ]}
      >
        <Form
          form={signUpForm}
          name="signup-form"
          onFinish={handleSignUpForm}
          id="sing-up-form"
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
            name="email"
            key="email"
            label="Email"
            rules={[{ required: true }]}
          >
            <Input type="email" />
          </Form.Item>

          <Form.Item
            name="password"
            key="password"
            label="Password"
            rules={[{ required: true }]}
          >
            <Input type="password" />
          </Form.Item>

          <Form.Item
            name="confirm_password"
            key="confirm_password"
            label="Confirm Password"
            rules={[{ required: true }]}
          >
            <Input type="password" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default SignUp;
