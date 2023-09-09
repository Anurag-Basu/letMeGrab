import React from "react";
import { Typography, Input, Button } from "antd";

const { Title } = Typography;

const ContactSection: React.FC = () => {
  return (
    <div id="contact" className="py-10 bg-gray-200">
      <div className="container flex mx-auto">
        <div className="w-1/3 pr-4">
          <div className="mb-6 text-4xl text-center">Contact Us</div>
        </div>

        <div className="w-1/3 pl-4">
          <div className="flex flex-col">
            <div className="mb-4">
              <Title level={4}>About Us</Title>
              We are a leading company in providing exceptional services.
            </div>
            <div className="mb-4">
              <Title level={4}>Services</Title>
              We offer a wide range of services to meet your needs.
            </div>
            <div className="mb-4">
              <Title level={4}>Privacy Policy</Title>
              Read our privacy policy to learn how we protect your data.
            </div>
          </div>
          <div className="mt-6">
            <Title level={4}>Contact Information</Title>
            Email: contact@example.com
            <br />
            Phone: +1 (123) 456-7890
          </div>
        </div>

        <div className="w-1/3 pl-4">
          <div className="flex flex-col">
            <div className="mb-4">
              <Title level={4}>Newsletter Signup</Title>
              Subscribe to our newsletter for the latest updates.
            </div>
            <div className="flex items-center">
              <Input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border rounded-md"
              />
              <Button type="primary" className="ml-2">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
