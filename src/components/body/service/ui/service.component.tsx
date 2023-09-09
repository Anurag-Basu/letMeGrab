import { Typography } from "antd";

const { Title } = Typography;
const Service = () => {
  return (
    <div id="service" className="p-20 parentContainer">
      <div className="flex mb-4 about-content">
        <div className="w-[50%] flex justify-center items-center">
          <Title level={1}>Our Services</Title>
        </div>
        <div className="w-[50%]">
          <Title level={3}>What We Offer</Title>
          <Typography className="text-justify">
            We offer a wide range of services to cater to your needs. From fast
            and reliable shipping to exceptional customer support, we go above
            and beyond to ensure your satisfaction. Our team is dedicated to
            providing you with a seamless shopping experience from start to
            finish. Shop with confidence knowing that we are here to assist you
            every step of the way.
          </Typography>
        </div>
      </div>
      <div className="flex py-20 space-x-4">
        <div className="flex flex-col items-center w-full max-w-[33%]">
          <img
            src="https://images.unsplash.com/photo-1634638024484-1b83581271bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80"
            alt="Feature"
            className="w-full h-[500px]"
          />
          <div className="flex items-center justify-between h-16">
            <Title level={5}>Fast Shipping</Title>
            <div className="w-[30%] text-xs text-justify">
              Quick and reliable shipping to your doorstep.
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full max-w-[33%]">
          <img
            src="https://images.unsplash.com/photo-1534073828943-f801091bb18c?ixlib=rb-4.0.3&ixid=M3xMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80"
            alt="Feature"
            className="w-full h-[600px]"
          />
          <div className="flex items-center justify-between h-16">
            <div className="w-[50%] text-xl">24/7 Customer Support</div>
            <div className="w-[40%] text-xs text-justify">
              We are here to assist you whenever you need help.{" "}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full max-w-[33%]">
          <img
            src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&ixid=M3xMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2865&q=80"
            alt="Feature"
            className="w-full h-[400px]"
          />
          <div className="flex items-center justify-between h-16">
            <Title level={5}>Easy Return</Title>
            <div className="w-[30%] text-xs text-justify">
              Hassle-free returns within 30 days of purchase.{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
